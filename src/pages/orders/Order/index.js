import React from 'react'
import { ContainerOrder,ValueOrder,TittleOrder,InfoOrder,NumOrder,StatusOrder,OrderDetail} from './style'
import moment from 'moment'
const Order = ({ product }) => {
    const formatDate = moment(product.created_at).format("DD/MM/YYYY");
    return (
        <ContainerOrder>
            <NumOrder>
                <TittleOrder>NUMERO DO PEDIDO</TittleOrder>
                <InfoOrder>#{product._id}</InfoOrder>
            </NumOrder>
            <StatusOrder>
                <TittleOrder>STATUS</TittleOrder>
                <strong><InfoOrder color='#2DC26E'>Concluido</InfoOrder></strong>
            </StatusOrder>
            <ValueOrder>
                <TittleOrder>DATA</TittleOrder>
                <InfoOrder>{formatDate}</InfoOrder>
            </ValueOrder>
            <ValueOrder>
                <TittleOrder>PAGAMENTO</TittleOrder>
                <InfoOrder>Cartao de credito</InfoOrder>
            </ValueOrder>
            <ValueOrder>
                <OrderDetail>Detalhes do produto</OrderDetail>
            </ValueOrder>
        </ContainerOrder>
    )
}

export default Order