import React from 'react'
import { CartContext } from '../../contexts/cart'
import EmptyCart from '../../imgs/EmptyCart.png'
import {
  ContainerCart, ContainerLocationSearch, ContainerSearch, ContainerMain, Aside, SectionMain, Endereco, ContainerProducts,
  TittleProducts, ButtonBuy, ButtonContinue, Summary, ValueInPix, ContainerButton, Values, ContainerEmpty
} from './style'
import { FaMapMarkerAlt, FaStore, FaTrash } from "react-icons/fa";
import TimeLine from '../../components/timeLine'
import Produto from './Product';
import { NavLink } from 'react-router-dom';

const Empty = () => {
  return (
    <ContainerEmpty>
      <div>
        <img alt='carrinho vazio' src={EmptyCart} />
      </div>
    </ContainerEmpty>
  )
}

const Cart = () => {
  const { cart, deleteAll } = React.useContext(CartContext);
  const ValoresItems = cart.map((item) => item.product.price);
  const DescontoTotal = cart.map((item) => (item.product.price * item.product.promotion.discount) / 100);
  const [Address, setAddress] = React.useState({});
  const [cep, setCep] = React.useState();
  const [releasedAddress, setReleasedAddress] = React.useState(false);
  const ValorTotal = ValoresItems.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  const Avista = ValorTotal - DescontoTotal.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
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
      <TimeLine stage={0} />
      <ContainerMain>
        <SectionMain>
          <ContainerLocationSearch>
            <h2> <span> <FaMapMarkerAlt /> </span> SELECIONE SEU ENDERECO </h2>
            <ContainerSearch>
              <input placeholder='Inserir CEP' onChange={({ target }) => setCep(target.value)} />
              <button onClick={captureAddress}>OK</button>
              <a href='a'>Nao lembro meu cep</a>
            </ContainerSearch>
            {releasedAddress && <Endereco>Entregar em : {Address.logradouro}</Endereco>}
          </ContainerLocationSearch>

          <ContainerProducts>
            <TittleProducts>
              <h2> <span><FaStore /></span> PRODUTO E FRETE </h2>
              <button onClick={() => deleteAll()}> <FaTrash /> REMOVER TODOS OS PRODUTOS</button>
            </TittleProducts>
            {
              cart.length <= 0 ? <Empty /> : cart.map((product) => <Produto key={product._id} product={product} />)
            }
          </ContainerProducts>
        </SectionMain>

        <Aside>
          <TittleProducts>
            <h2> <span><FaStore /></span> RESUMO </h2>
          </TittleProducts>
          <Summary>
            <Values>
              <div>Valor dos produtos <span> {ValorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </span> </div>
              <div>Frete: <span>R$ 42,90</span></div>
            </Values>
            <ValueInPix>
              <p>Valor no <strong>PIX</strong></p>
              <div>
                <strong>
                  {Avista.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                </strong>
              </div>
              <span>{`(Economize : R$ 165,26)`}</span>
            </ValueInPix>
            <ContainerButton>
              <NavLink to='/payment'>
                <ButtonBuy> IR PARA PAGAMNETO</ButtonBuy>
              </NavLink>
              <ButtonContinue> CONTINUAR COMPRANDO </ButtonContinue>
            </ContainerButton>
          </Summary>
        </Aside>
      </ContainerMain>
    </ContainerCart>
  )
}

export default Cart