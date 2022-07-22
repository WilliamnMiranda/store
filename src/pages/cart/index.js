import React from 'react'
import { CartContext } from '../../contexts/cart'
import {
  ContainerCart, ContainerBuscaDeLocalidade, ContainerBuscar, ContainerMain, Aside, SectionMain, Endereco, ContainerProdutos,
  TittleProdutos
} from './style'
import { FaMapMarkerAlt, FaStore, FaTrash } from "react-icons/fa";
import TimeLine from './timeLine'
import Produto from './Product';
const Cart = () => {
  const { cart } = React.useContext(CartContext);
  console.log(cart)
  return (
    <ContainerCart>
      <TimeLine />
      <ContainerMain>
        <SectionMain>
          <ContainerBuscaDeLocalidade>
            <h2> <span> <FaMapMarkerAlt /> </span> SELECIONE SEU ENDERECO </h2>
            <ContainerBuscar>
              <input placeholder='Inserir CEP' />
              <button>OK</button>
              <a href='a'>Nao lembro meu cep</a>
            </ContainerBuscar>
            <Endereco>Entregar em : rua qualquer</Endereco>
          </ContainerBuscaDeLocalidade>

          <ContainerProdutos>
            <TittleProdutos>
              <h2> <span><FaStore /></span> PRODUTO E FRETE </h2>
              <button> <FaTrash /> REMOVER TODOS OS PRODUTOS</button>
            </TittleProdutos>
            {
             cart && cart.map((product)=> <Produto product={product.product} />)
            }
          </ContainerProdutos>
        </SectionMain>

        <Aside>
        <TittleProdutos>
              <h2> <span><FaStore /></span> RESUMO </h2>
        </TittleProdutos>
        </Aside>
      </ContainerMain>
    </ContainerCart>
  )
}

export default Cart