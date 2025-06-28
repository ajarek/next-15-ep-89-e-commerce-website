/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from '@/lib/models'
import connectToDb from '@/lib/connectToDb'
import bcrypt from 'bcryptjs'

// Walidacja email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Rate limiting w pamięci (dla produkcji użyj Redis)
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>()

const checkRateLimit = (email: string): boolean => {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minut
  const maxAttempts = 5
  
  const attempts = loginAttempts.get(email)
  
  if (!attempts) {
    loginAttempts.set(email, { count: 1, lastAttempt: now })
    return true
  }
  
  // Reset jeśli minęło okno czasowe
  if (now - attempts.lastAttempt > windowMs) {
    loginAttempts.set(email, { count: 1, lastAttempt: now })
    return true
  }
  
  if (attempts.count >= maxAttempts) {
    return false
  }
  
  attempts.count++
  attempts.lastAttempt = now
  return true
}

const resetRateLimit = (email: string): void => {
  loginAttempts.delete(email)
}

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { 
          label: 'Email', 
          type: 'email', 
          required: true,
          placeholder: 'your@email.com'
        },
        password: { 
          label: 'Password', 
          type: 'password', 
          required: true 
        },
      },
      async authorize(credentials: any) {
        // Podstawowa walidacja
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required')
        }

        // Walidacja formatu email
        if (!isValidEmail(credentials.email)) {
          throw new Error('Invalid email format')
        }

        // Sprawdź rate limiting
        if (!checkRateLimit(credentials.email)) {
          throw new Error('Too many login attempts. Please try again later.')
        }

        try {
          await connectToDb()
          
          const user = await User.findOne({ 
            email: credentials.email.toLowerCase().trim() 
          })

          if (!user) {
            console.error(`Login attempt failed: User not found for email: ${credentials.email}`)
            throw new Error('Invalid credentials')
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          )

          if (!isPasswordCorrect) {
            console.error(`Login attempt failed: Invalid password for email: ${credentials.email}`)
            throw new Error('Invalid credentials')
          }

          // Reset rate limiting po udanym logowaniu
          resetRateLimit(credentials.email)

          console.log(`Successful login for user: ${user.email}`)
          
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.username,
            image: user.img,
            isAdmin: user.isAdmin,
          }
        } catch (err: any) {
          console.error('Authentication error:', {
            message: err.message,
            email: credentials.email,
            timestamp: new Date().toISOString()
          })
          
          // Nie ujawniaj szczegółów błędu użytkownikowi
          if (err.message.includes('credentials') || err.message.includes('attempts')) {
            throw err
          }
          
          throw new Error('Authentication failed. Please try again.')
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
          admin: user.isAdmin,
          image: user.image,
        }
      }
      return token
    },
    
    async session({ session, token }: any) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
          admin: token.admin,
          image: token.image,
        },
      }
    },

    async redirect({ url, baseUrl }: any) {
      // Pozwól na lokalne przekierowania
      if (url.startsWith('/')) return `${baseUrl}${url}`
      // Pozwól na przekierowania do tej samej domeny
      if (new URL(url).origin === baseUrl) return url
      // Domyślne przekierowanie
      return `${baseUrl}/dashboard`
    },
  },

  pages: {
    signIn: '/login',
    error: '/auth/error',
  },

  events: {
    async signIn({ user}: any) {
      console.log(`User signed in: ${user.email}`)
    },
    async signOut({ token }: any) {
      console.log(`User signed out: ${token.email}`)
    },
  },

  secret: process.env.AUTH_SECRET,
  
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 dni
    updateAge: 24 * 60 * 60, // Aktualizuj token co 24h
  },

  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 dni
  },

  // Dodatkowe opcje bezpieczeństwa
  useSecureCookies: process.env.NODE_ENV === 'production',
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === 'production' ? '__Secure-next-auth.session-token' : 'next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
})