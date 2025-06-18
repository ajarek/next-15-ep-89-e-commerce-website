import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const SelectColor = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a color" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="red">Red</SelectItem>
        <SelectItem value="blue">Blue</SelectItem>
        <SelectItem value="green">Green</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SelectColor
