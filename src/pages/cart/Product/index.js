import React from 'react'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import { ContainerProduto,ContainerInfosProdutos,FotoProduto,InfoProduto,Nome,QuantidadeProduto,PrecoAvista,BotaodiminuirQuantidade,BotaoAumentarQuantidade,QuantidadeDoProduto,Remove } from './style'
const Produto = ({product}) => {
  return (
    <ContainerProduto>
       <ContainerInfosProdutos>
            <FotoProduto src={product.photo}/>
            <InfoProduto> 
                <Nome> {product.name} </Nome>
            </InfoProduto>
            <QuantidadeProduto>
               <p>quant</p>
               <div>
                  <BotaodiminuirQuantidade> <FaChevronLeft/> </BotaodiminuirQuantidade>
                  <QuantidadeDoProduto> 5 </QuantidadeDoProduto>
                  <BotaoAumentarQuantidade> <FaChevronRight/> </BotaoAumentarQuantidade>
               </div>
               <Remove>REMOVER</Remove>
            </QuantidadeProduto>
            <PrecoAvista></PrecoAvista>
        </ContainerInfosProdutos> 
    </ContainerProduto>
  )
}

export default Produto