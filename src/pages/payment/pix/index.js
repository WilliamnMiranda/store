import React from 'react'
import { ContainerPix, FirstTitulo, SecondTittle, ContainerInfos, Info } from './style'
import { CartContext } from '../../../contexts/cart';
const Pix = () => {
    const { cart } = React.useContext(CartContext);
    const ValoresItems = cart.map((item) => item.product.price);
    const DescontoTotal = cart.map((item) => (item.product.price * item.product.promotion.discount) / 100);
    const ValorTotal = ValoresItems.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    const Avista = ValorTotal - DescontoTotal.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    return (
        <ContainerPix>
            <strong>
                <FirstTitulo> <p>Pix</p> </FirstTitulo>
            </strong>
            <strong>
                <SecondTittle> <p>A melhor opção para suas compras à vista</p> </SecondTittle>
            </strong>

            <p>Pague com PIX e aproveite <strong>até 15% OFF</strong>. Nessa modalidade, <strong>seu pedido é aprovado instantaneamente</strong>, o que torna a expedição do seu pedido ainda mais rápida.</p>

            <p>O que você precisa saber antes de pagar por PIX:</p>

            <ul>
                <li>É necessário possuir uma chave PIX cadastrada no seu Banco;</li>
                <li>Com o seu celular, basta escanear o QR Code ou copiar o código para efetivar a compra;</li>
                <li>O pagamento é processado e debitado do valor em sua conta corrente</li>
                <li>Como padrão, o Banco Central limitou os pagamentos no período das 20h às 06h, a valores de até R$1.000. Mas você pode solicitar o aumento do limite deste período diretamente com o seu banco, pela Central de Atendimento ou APP. O prazo de liberação é de até 48h.</li>
            </ul>

            <ContainerInfos>
                <Info background={'rgb(255, 239, 230)'} color={'red'}>
                    <strong>
                        <p>TOTAL DA SUA COMPRA :</p>
                        <span> {ValorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </span>
                    </strong>
                </Info>
                <Info background={'rgb(229, 255, 241)'} color={'green'}>
                    <strong>
                        <p> PAGAMENTO VIA PIX :</p>
                        <span>{Avista.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                    </strong>
                </Info>
            </ContainerInfos>
            <button>FINALIZAR COMPRA</button>
        </ContainerPix>
    )
}

export default Pix