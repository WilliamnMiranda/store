import React from 'react'
import { CartContext } from '../../../../contexts/cart'
import { ContainerProdutoMobile, Imagem, Rating, PrecoAVista, PrecoParcelado, AlterarItems, Name } from './style'
const ProductMobile = ({ product }) => {
  const parcelado = (product.product.price / 12).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  const valueDiscount = (product.product.price * product.product.promotion.discount) / 100
  const priceDiscount = product.product.price - valueDiscount
  const { deleteProduct } = React.useContext(CartContext);
  console.log(product)
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
        <span style={{fontSize: '0.8em'}}>ou</span>
        <PrecoParcelado>12x {parcelado}</PrecoParcelado>
        <AlterarItems>
          Alterar quantidade <button onClick={()=>deleteProduct(product._id)}>remover</button>
        </AlterarItems>
      </section>
    </ContainerProdutoMobile>
  )
}

export default ProductMobile