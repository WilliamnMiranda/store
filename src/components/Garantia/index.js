import React from 'react'
import {
    ContainerGarantia,
    TempoGarantia,
    ParcelasGarantiga,
    ValorGarantias,
    SelecionarGarantia,
} from './style';

const Garantia = () => {
    return (
        <ContainerGarantia>
            <TempoGarantia> <strong>Sem garantia</strong></TempoGarantia>
            <ParcelasGarantiga>
                <p>Em ate 10x</p>
                <p>Sem juros de</p>
            </ParcelasGarantiga>
            <ValorGarantias><strong>R$ 42,06</strong></ValorGarantias>
            <SelecionarGarantia>
                <input type="radio" />
            </SelecionarGarantia>
        </ContainerGarantia>
    )
}

export default Garantia