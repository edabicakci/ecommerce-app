import React from 'react'
import {useState, useEffect} from "react"
import { baseService } from '../network/services/baseService'
import Order from "./Order"

const Orders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
      getOrders()
    }, [])

    const getOrders = async() => {
        const orderData = await baseService.get("/orders")
        const _orderData = orderData.filter (order=> order.customerId === "SKRHRNO")
        setOrders([..._orderData])
    }
    
  return (
    <div style ={{paddingTop:60}}>
        {orders.length && orders.map((order,key) => <Order key = {key} order = {order}/> )}
    </div>
  )
}

export default Orders