import React from 'react'
import { ContainerProduto,ContainerInfosProdutos,FotoProduto,InfoProduto,Nome,QuantidadeProduto,PrecoAvista } from './style'
const Produto = ({product}) => {
  return (
    <ContainerProduto>
       <ContainerInfosProdutos>
            <FotoProduto> </FotoProduto>
            <InfoProduto> 
                <Nome> </Nome>
            </InfoProduto>
            <QuantidadeProduto></QuantidadeProduto>
            <PrecoAvista></PrecoAvista>
        </ContainerInfosProdutos> 
    </ContainerProduto>
  )
}

export default Produto