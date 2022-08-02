import Timeline from '../../components/timeLine'
import React from 'react'
import Pix from './pix';
import Card from './cartao';
import { ContainerPayment, Aside, ContainerOptions, ContainerOptionsPayment, ButtonTypePayment } from './style'
import { FaDonate } from "react-icons/fa";
import { CartContext } from '../../contexts/cart';
import { useNavigate } from "react-router-dom";
const Payment = () => {
  let navigate = useNavigate();
  const { cart } = React.useContext(CartContext);
  React.useEffect(()=>{
    if(cart.length <= 0) navigate("/cart", { replace: true })
},[])
React.useEffect(()=>{
  window.scrollTo(0,0)
},[])
  const style = {
    backgroundColor: '#FF6500',
    color: 'white'
  }
  const [SelectOption, setSelectOption] = React.useState('Pix')
  const RenderOption = () => {
    switch (SelectOption) {
      case 'Pix':
        return <Pix />
      case 'Card':
        return <Card />
      default:
        return <Pix />
    }
  }
  return (
    <ContainerPayment>
      <Timeline stage={2} />
      <h1> <span><FaDonate /></span> Forma de pagamento</h1>
      <ContainerOptions>
        <Aside>
          <ButtonTypePayment style={SelectOption === 'Pix' ? style : {}} onClick={()=> setSelectOption('Pix')}> PIX </ButtonTypePayment>
          <ButtonTypePayment style={SelectOption === 'Boleto' ? style : {}}> BOLETO BANCARIO </ButtonTypePayment>
          <ButtonTypePayment style={SelectOption === 'Card' ? style : {}} onClick={()=> setSelectOption('Card')}> CARTAO DE CREDITO </ButtonTypePayment>
        </Aside>
        <ContainerOptionsPayment>
          {RenderOption()}
        </ContainerOptionsPayment>
      </ContainerOptions>
    </ContainerPayment>
  )
}

export default Payment