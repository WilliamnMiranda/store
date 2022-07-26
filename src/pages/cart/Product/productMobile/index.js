import { ProductionQuantityLimits } from '@mui/icons-material'
import React from 'react'
import {ContainerProdutoMobile,Imagem} from './style'
const index = ({product}) => {
  return (
    <ContainerProdutoMobile>
        <Imagem src={product.photo} />
    </ContainerProdutoMobile>
  )
}

export default index