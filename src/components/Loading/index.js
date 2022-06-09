import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { ContainerLoading } from './style'
const Loading = () => {
  return (
    <ContainerLoading>
        <CircularProgress />
    </ContainerLoading>
  )
}

export default Loading