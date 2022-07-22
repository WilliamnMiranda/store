import React from 'react'
import { FaChevronLeft,FaChevronRight,FaTrash } from "react-icons/fa";
import { ContainerProduto,ContainerInfosProdutos,FotoProduto,InfoProduto,Nome,QuantidadeProduto,PrecoAvista,BotaodiminuirQuantidade,BotaoAumentarQuantidade,
   QuantidadeDoProduto,Remove,Marca,Valor } from './style'
const Produto = ({product}) => {
  return (
    <ContainerProduto>
       <ContainerInfosProdutos>
            <FotoProduto src={product.photo}/>
            <InfoProduto> 
                <Marca>Hyperx</Marca>
                <Nome> {product.name} </Nome>
                <Valor>Parcelado no cartao em ate 10x sem juros : 1.434,21</Valor>
            </InfoProduto>
            <QuantidadeProduto>
               <p>quant</p>
               <div>
                  <BotaodiminuirQuantidade> <FaChevronLeft/> </BotaodiminuirQuantidade>
                  <QuantidadeDoProduto> 5 </QuantidadeDoProduto>
                  <BotaoAumentarQuantidade> <FaChevronRight/> </BotaoAumentarQuantidade>
               </div>
               <Remove> <FaTrash style={{marginRight:'5px'}} /> REMOVER</Remove>
            </QuantidadeProduto>
            <PrecoAvista>
               <p>Preco a vistano pix</p>
               <div> {product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </div>
            </PrecoAvista>
        </ContainerInfosProdutos> 
    </ContainerProduto>
  )
}

export default Produto