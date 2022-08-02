import React from 'react'
import { FaChevronLeft, FaChevronRight, FaTrash } from "react-icons/fa";
import { CartContext } from '../../../../contexts/cart'
import {
  ContainerProdutoMobile, Imagem, Rating, PrecoAVista, PrecoParcelado, AlterarItems, Name, QuantidadeProduto,
  BotaodiminuirQuantidade, QuantidadeDoProduto, BotaoAumentarQuantidade, Remove
} from './style'
const ProductMobile = ({ product }) => {
  const parcelado = (product.product.price / 12).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  const valueDiscount = (product.product.price * product.product.promotion.discount) / 100
  const priceDiscount = product.product.price - valueDiscount
  const { deleteProduct, updateItem } = React.useContext(CartContext);
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
    if (option === '+') {
      setInventory((prev) => prev + 1)
      addItems(option)
    }
  }
  return (
    <ContainerProdutoMobile>
      <Imagem src={product.product.photo} />
      <section>
        <Name>{product.product.name}</Name>
        <Rating></Rating>
        <PrecoAVista>
          <strong>
            {priceDiscount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </strong>
          <span> a vista no pix</span>
        </PrecoAVista>
        <span style={{ fontSize: '0.8em' }}>ou</span>
        <PrecoParcelado>12x {parcelado}</PrecoParcelado>
        <AlterarItems>
          <QuantidadeProduto>
            <div>
              <BotaodiminuirQuantidade onClick={() => alterInventory('-')}> <FaChevronLeft /> </BotaodiminuirQuantidade>
              <QuantidadeDoProduto> {product.amount} </QuantidadeDoProduto>
              <BotaoAumentarQuantidade onClick={() => alterInventory('+')}> <FaChevronRight /> </BotaoAumentarQuantidade>
            </div>
            <Remove onClick={() => deleteProduct(product._id)}> <FaTrash style={{ marginRight: '5px' }} /> REMOVER</Remove>
          </QuantidadeProduto>
        </AlterarItems>
      </section>
    </ContainerProdutoMobile>
  )
}

export default ProductMobile