import React from 'react'
import {useState, useEffect} from "react"
import { baseService } from '../network/services/baseService'
import Order from "./Order"

const Orders = ({custId}) => {

    const [orders, setOrders] = useState([])
    const [customerID, setCustomerID] = useState(custId)

    useEffect(() => {
      getOrders()
    }, [])

    const getOrders = async() => {
      try{
        const orderData = await baseService.get("/orders")
        console.log("orders", orderData);
        console.log("custId", custId);
        console.log("first", customerID);
        setCustomerID(custId)
        const _orderData = orderData.filter (order=> order.customerId === customerID)
        console.log("orderData", _orderData);
        setOrders([..._orderData])
        console.log("customerId:", customerID);
      }catch(error){
        console.log("Error", error);
      }   
    }
    
  return (
    <div style ={{paddingTop:60}}>
        {orders.length > 0 ? orders.map((order,key) => <Order key = {key} order = {order}/> )
        : <h1>Henüz Sipariş Vermediniz!</h1>}
    </div>
  )
}

export default Orders