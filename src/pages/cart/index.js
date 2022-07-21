import React from 'react'
import { CartContext } from '../../contexts/cart'
import { ContainerCart,ContainerBuscaDeLocalidade,ContainerBuscar,ContainerMain,Aside,SectionMain,Endereco,ContainerProdutos} from './style'
import { FaMapMarkerAlt } from "react-icons/fa";
import TimeLine from './timeLine'
const Cart = () => {
  const { cart }  = React.useContext(CartContext);
  console.log(cart)
  return (
    <ContainerCart>
      <TimeLine />
      <ContainerMain>
        <SectionMain>
          <ContainerBuscaDeLocalidade>
            <h2> <span> <FaMapMarkerAlt/> </span> SELECIONE SEU ENDERECO </h2>
            <ContainerBuscar>
              <input placeholder='Inserir CEP' />
              <button>OK</button>
              <a href='a'>Nao lembro meu cep</a>
            </ContainerBuscar>
            <Endereco>Entregar em : rua qualquer</Endereco>
          </ContainerBuscaDeLocalidade>

          <ContainerProdutos>

          </ContainerProdutos>
        </SectionMain>

        <Aside>

        </Aside>
      </ContainerMain>
    </ContainerCart>
  )
}

export default Cart