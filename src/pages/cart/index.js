import React from 'react'
import { CartContext } from '../../contexts/cart'
import { ContainerCart,ContainerBuscaDeLocalidade,ContainerBuscar} from './style'
import { FaMapMarkerAlt } from "react-icons/fa";
import TimeLine from './timeLine'
const Cart = () => {
  const { cart }  = React.useContext(CartContext);
  console.log(cart)
  return (
    <ContainerCart>
      <TimeLine />
      <ContainerBuscaDeLocalidade>
        <h2> <span> <FaMapMarkerAlt/> </span> SELECIONE SEU ENDERECO </h2>
        <ContainerBuscar>
          <input placeholder='Inserir CEP' />
          <button>OK</button>
          <a href='a'>Nao lembro meu cep</a>
        </ContainerBuscar>
      </ContainerBuscaDeLocalidade>
    </ContainerCart>
  )
}

export default Cart