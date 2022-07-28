import React from 'react'
import { CartContext } from '../../contexts/cart'
import {
  ContainerCart, ContainerBuscaDeLocalidade, ContainerBuscar, ContainerMain, Aside, SectionMain, Endereco, ContainerProdutos,
  TittleProdutos, ButtonComprar, ButtonContinuar, Resumo, ValorNoPix, ContainerButton, Valores
} from './style'
import { FaMapMarkerAlt, FaStore, FaTrash } from "react-icons/fa";
import TimeLine from './timeLine'
import Produto from './Product';
const Cart = () => {
  const { cart,deleteAll } = React.useContext(CartContext);
  const ValoresItems = cart.map((item) => item.product.price);
  const [Address, setAddress] = React.useState({});
  const [cep, setCep] = React.useState();
  const [releasedAddress, setReleasedAddress] = React.useState(false);
  const captureAddress = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const data = await response.json()
      setAddress(data)
      setReleasedAddress(true);
    }
    catch (e) {
      setReleasedAddress(false)
    }
  }
  console.log(cart)
  return (
    <ContainerCart>
      <TimeLine />
      <ContainerMain>
        <SectionMain>
          <ContainerBuscaDeLocalidade>
            <h2> <span> <FaMapMarkerAlt /> </span> SELECIONE SEU ENDERECO </h2>
            <ContainerBuscar>
              <input placeholder='Inserir CEP' onChange={({ target }) => setCep(target.value)} />
              <button onClick={captureAddress}>OK</button>
              <a href='a'>Nao lembro meu cep</a>
            </ContainerBuscar>
            {releasedAddress && <Endereco>Entregar em : {Address.logradouro}</Endereco>}
          </ContainerBuscaDeLocalidade>

          <ContainerProdutos>
            <TittleProdutos>
              <h2> <span><FaStore /></span> PRODUTO E FRETE </h2>
              <button onClick={()=> deleteAll()}> <FaTrash /> REMOVER TODOS OS PRODUTOS</button>
            </TittleProdutos>
            {
              cart && cart && cart.map((product) => <Produto key={product._id} product={product} />)
            }
          </ContainerProdutos>
        </SectionMain>

        <Aside>
          <TittleProdutos>
            <h2> <span><FaStore /></span> RESUMO </h2>
          </TittleProdutos>
          <Resumo>
            <Valores>
              <div>Valor dos produtos </div>
              <div>Frete: <span>R$ 42,90</span></div>
            </Valores>
            <ValorNoPix>
              <p>Valor no <strong>PIX</strong></p>
              <div>
                <strong>
                  {ValoresItems.reduce((previousValue, currentValue) => previousValue + currentValue, 0).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                </strong>
              </div>
              <span>{"(Economize : R$ 165,26)"}</span>
            </ValorNoPix>
            <ContainerButton>
              <ButtonComprar> IR PARA PAGAMNETO</ButtonComprar>
              <ButtonContinuar> CONTINUAR COMPRANDO </ButtonContinuar>
            </ContainerButton>
          </Resumo>
        </Aside>
      </ContainerMain>
    </ContainerCart>
  )
}

export default Cart