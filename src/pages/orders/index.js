import React from 'react'
import {ContainerOrders,TittleOrders,StatusOrders} from './style'
import orderServices from '../../services/order'
import { FaWallet } from "react-icons/fa";
import Order from './Order';
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
        <TittleOrders> <FaWallet /> MEUS PEDIDOS</TittleOrders>
        <StatusOrders>
            {
              orders && orders.map((item) => <Order product={item}/> )
            }
        </StatusOrders>
    </ContainerOrders>
  )
}

export default Orders