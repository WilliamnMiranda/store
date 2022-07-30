import React from 'react'
import {ContainerOrders,TittleOrders,StatusOrders,Order} from './style'

const Orders = () => {
  return (
    <ContainerOrders>
        <TittleOrders></TittleOrders>
        
        <StatusOrders>
            <Order></Order>
        </StatusOrders>
    </ContainerOrders>
  )
}

export default Orders