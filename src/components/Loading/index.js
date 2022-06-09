import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { ContainerLoading } from './style'
const Loading = () => {
  return (
    <ContainerLoading>
        <CircularProgress color={'info'} size={80}/>
    </ContainerLoading>
  )
}

export default Loading