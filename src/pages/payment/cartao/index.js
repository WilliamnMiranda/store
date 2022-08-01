import React from 'react'
import { ContainerCard, CardData, ContainerCardData } from './style'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Message from '../../../components/Message'
import FormControl from '@mui/material/FormControl';
import { CartContext } from '../../../contexts/cart';
import addressSchema from './validate'
import { useNavigate } from "react-router-dom";
import orderServices from '../../../services/order'
const Cartao = () => {
    const { cart,deleteAll } = React.useContext(CartContext);
    let navigate = useNavigate();
    const [installments, setInstallments] = React.useState('')
    const [nameCard, setNameCard] = React.useState('')
    const [cvvCard, setCvvCard] = React.useState()
    const [numberCard, setNumberCard] = React.useState()
    const [validateCard, setValidateCard] = React.useState('')
    const [date, setDate] = React.useState('')
    const [cpf, setCpf] = React.useState('')
    const initialMessage = {
        message: '',
        status: null
    }
    const [message, setMessage] = React.useState(initialMessage)
    const handleChange = (event) => {
        setInstallments(event.target.value);
    };
    const addOrder =  async() =>{
        const products = [...cart]
        await orderServices.post(products)
        deleteAll()
        setTimeout(() => setMessage(initialMessage), 1000)
        setTimeout(() => navigate("/orders", { replace: true }), 1200)
    }
    const confirmPayment = () => {
        const InformationsPayment = {
            nameCard,
            cvvCard,
            numberCard,
            validateCard,
            date,
            cpf
        }
        console.log(installments)
        addressSchema
            .isValid(InformationsPayment)
            .then(valid => {
                if (valid) {
                    setMessage({
                        status: true,
                        message: "compra realizada"
                    })
                    addOrder()
                }
                else {
                    setMessage({
                        status: false,
                        message: "Dados Invalidos"
                    })
                    setTimeout(() => setMessage(initialMessage), 1000)
                }

            });
    }
    const ValoresItems = cart.map((item) => item.product.price);
    const ValorTotal = ValoresItems.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    const parcelas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <ContainerCard>
            <h1>Cartão de crédito</h1>
            <h2> À vista com até 10% de desconto* ou tudo em até 10x sem juros!</h2>
            <p>O KaBuM! aceita as bandeiras de cartão VISA, MasterCard, ELO, HiperCard, American Express e Diners - Todos em até 10x sem juros ou com desconto em até 3x!</p>
            <p>*O desconto poderá ser concedido ou não até o limite de 10%, podendo ser menor ou zero, de acordo com o detalhado nas descrições do produto e só será aplicado às vendas diretas e entregues pelo KaBuM!, não se aplicando aos produtos de Marketplace.</p>
            {message.message !== '' && <Message message={message} top={-75} />}
            <CardData>
                <ContainerCardData>
                    <TextField
                        label='nome'
                        type="text"
                        sx={{ width: '50%' }}
                        onChange={(e) => setNameCard(e.target.value)}
                        focused
                    />
                    <TextField
                        label="Numero"
                        type="text"
                        sx={{ width: '50%' }}
                        onChange={(e) => setNumberCard(e.target.value)}
                        focused
                    />
                </ContainerCardData>

                <ContainerCardData>
                    <TextField
                        label="Validade"
                        type="date"
                        sx={{ width: '20%' }}
                        onChange={(e) => setValidateCard(e.target.value)}
                        focused
                    />
                    <TextField
                        label="CVV"
                        type="text"
                        onChange={(e) => setCvvCard(e.target.value)}
                        sx={{ width: '30%' }}
                        focused
                    />
                    <TextField
                        label="CPF"
                        type="text"
                        onChange={(e) => setCpf(e.target.value)}
                        sx={{ width: '30%' }}
                        focused
                    />
                    <TextField
                        label="Data de nascimento"
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                        sx={{ width: '20%' }}
                        focused
                    />
                </ContainerCardData>
                <ContainerCardData>
                    <FormControl sx={{ m: 1, width: '100%' }}>
                        <InputLabel id="demo-simple-select-helper-label">Parcelas</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-standard"
                            value={installments}
                            label="Parcelas"
                            onChange={handleChange}
                            sx={{ width: '100%' }}
                        >
                            {
                                parcelas.map((item) => {
                                    return <MenuItem value={` ${item}x de ${(ValorTotal / item).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}>
                                        <span> {item}x sem juros - </span>
                                        {(ValorTotal / item).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                                    </MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </ContainerCardData>
                <button onClick={confirmPayment}>FINALIZAR COMPRA</button>
            </CardData>
        </ContainerCard>
    )
}

export default Cartao