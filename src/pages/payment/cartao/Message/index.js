import React from 'react' 
import { ContainerMessage } from './style'
const Success = ({message}) => {
  const background = message.status ?  'rgb(229, 255, 241)' :  'rgb(255, 239, 230)'
  return (
    <ContainerMessage background={background} >{message.message}</ContainerMessage>
  )
}

export default Success