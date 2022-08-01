import React from 'react'
import { FaChevronLeft, FaChevronRight, FaTrash } from "react-icons/fa";
import {
   ContainerProduto, ContainerInfosProdutos, FotoProduto, InfoProduto, Nome, QuantidadeProduto, PrecoAvista, BotaodiminuirQuantidade, BotaoAumentarQuantidade,
   QuantidadeDoProduto, Remove, Marca, Valor
} from './style'
import { CartContext } from '../../../contexts/cart'
import ProdutoMobile from './productMobile/index'
const Produto = ({ product }) => {
   const price = product.product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
   const valueDiscount = (product.product.price * product.product.promotion.discount) / 100
   const priceDiscount = (product.product.price - valueDiscount) * product.amount
   const { deleteProduct,updateItem } = React.useContext(CartContext);
   const [inventory, setInventory] = React.useState(product.amount);
   const addItems = (option) => {
      const items = {
         id: product._id,
         amount: option === '+' ? inventory + 1 : inventory - 1
      }
      updateItem(items)
   }
   const alterInventory = (option) => {
      console.log(option)
      if (option === '-') {
         if (inventory < 0)
            return
         setInventory((prev) => prev - 1)
         addItems(option)
      }
      if (option === '+'){
         setInventory((prev) => prev + 1)
         addItems(option)
      }
   }
   return (
      <>
         <ContainerProduto>
            <ContainerInfosProdutos>
               <FotoProduto src={product.product.photo} />
               <InfoProduto>
                  <Marca>Hyperx</Marca>
                  <Nome> {product.product.name} </Nome>
                  <Valor>Parcelado no cartao em ate 12x sem juros : {(product.product.price / 12).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Valor>
               </InfoProduto>
               <QuantidadeProduto>
                  <p>quant</p>
                  <div>
                     <BotaodiminuirQuantidade onClick={() => alterInventory('-')}> <FaChevronLeft /> </BotaodiminuirQuantidade>
                     <QuantidadeDoProduto> {product.amount} </QuantidadeDoProduto>
                     <BotaoAumentarQuantidade onClick={() => alterInventory('+')}> <FaChevronRight /> </BotaoAumentarQuantidade>
                  </div>
                  <Remove onClick={() => deleteProduct(product._id)}> <FaTrash style={{ marginRight: '5px' }} /> REMOVER</Remove>
               </QuantidadeProduto>
               <PrecoAvista>
                  <p>Preco a vista no pix</p>
                  <div> {(priceDiscount).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </div>
               </PrecoAvista>
            </ContainerInfosProdutos>
         </ContainerProduto>

         <ProdutoMobile product={product} />
      </>
   )
}

export default Produto