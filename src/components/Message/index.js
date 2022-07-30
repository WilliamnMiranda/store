import React from 'react'
import { ContainerMessage } from './style'
const Success = ({ message, top, color }) => {
  const background = message.status ? 'rgb(229, 255, 241)' : 'rgb(255, 239, 230)'
  return (
    <ContainerMessage color={color} top={top} background={background} >{message.message}</ContainerMessage>
  )
}

export default Success