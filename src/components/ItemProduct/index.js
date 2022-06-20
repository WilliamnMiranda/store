import React from 'react'
import {ContainerProduct} from './style'
const ItemProduct = ({product}) => {
  return (
    <ContainerProduct>
        {product.name}
    </ContainerProduct>
  )
}

export default ItemProduct