import React from 'react'
import {ContainerOrders,TittleOrders,StatusOrders,Order} from './style'
import orderServices from '../../services/order'
const Orders = () => {
  const [orders,setOrders] = React.useState()
  const getOrders = async () => {
    const orders = await orderServices.get();
    setOrders(orders)
  }
  React.useEffect(()=>{
    getOrders()
  },[])
  console.log(orders)
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