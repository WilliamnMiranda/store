import React from 'react'
import { ContainerCard, CardData, ContainerCardData } from './style'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { CartContext } from '../../../contexts/cart';

const Cartao = () => {
    const [installments, setInstallments] = React.useState('')
    const handleChange = (event) => {
        setInstallments(event.target.value);
    };
    const { cart } = React.useContext(CartContext);
    const ValoresItems = cart.map((item) => item.product.price);
    const ValorTotal = ValoresItems.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    const parcelas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <ContainerCard>
            <h1>Cartão de crédito</h1>
            <h2> À vista com até 10% de desconto* ou tudo em até 10x sem juros!</h2>
            <p>O KaBuM! aceita as bandeiras de cartão VISA, MasterCard, ELO, HiperCard, American Express e Diners - Todos em até 10x sem juros ou com desconto em até 3x!</p>
            <p>*O desconto poderá ser concedido ou não até o limite de 10%, podendo ser menor ou zero, de acordo com o detalhado nas descrições do produto e só será aplicado às vendas diretas e entregues pelo KaBuM!, não se aplicando aos produtos de Marketplace.</p>

            <CardData>
                <ContainerCardData>
                    <TextField
                        placeholder='nome'
                        type="text"
                        sx={{ width: '50%' }}
                        focused
                    />
                    <TextField
                        label="Numero"
                        type="text"
                        sx={{ width: '50%' }}
                        focused
                    />
                </ContainerCardData>

                <ContainerCardData>
                    <TextField
                        label="Validade"
                        type="date"
                        sx={{ width: '20%' }}
                        focused
                    />
                    <TextField
                        label="CVV"
                        type="text"
                        sx={{ width: '30%' }}
                        focused
                    />
                    <TextField
                        label="CPF"
                        type="text"
                        sx={{ width: '30%' }}
                        focused
                    />
                    <TextField
                        label="Data de nascimento"
                        type="date"
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
                                    return <MenuItem value={ValorTotal / item }>
                                        <span> {item}x sem juros - </span>
                                        {(ValorTotal / item).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                                    </MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </ContainerCardData>
                <button>FINALIZAR COMPRA</button>
            </CardData>
        </ContainerCard>
    )
}

export default Cartao