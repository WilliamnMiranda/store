import React from 'react'
import Input from './style'
const InputValue = ({value,placeholder,onChange,...props}) => {
  return (
    <Input onChange={onChange} placeholder={placeholder} value={value} {...props}/>
  )
}

export default InputValue