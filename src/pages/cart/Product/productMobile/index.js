import React from 'react'
import { ContainerProdutoMobile, Imagem, Rating, PrecoAVista, PrecoParcelado, AlterarItems, Name } from './style'
const index = ({ product }) => {
  const parcelado = (product.price / 12).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  const valueDiscount = (product.price * product.promotion.discount) / 100
  const priceDiscount = product.price - valueDiscount
  return (
    <ContainerProdutoMobile>
      <Imagem src={product.photo} />
      <section>
        <Name>{product.name}</Name>
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
          Alterar quantidade <button>remover</button>
        </AlterarItems>
      </section>
    </ContainerProdutoMobile>
  )
}

export default index