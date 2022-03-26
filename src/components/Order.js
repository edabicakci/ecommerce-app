import React from 'react'
import "./styles.css"
import { useState, useEffect } from 'react'
import moment from 'moment'


const Order = ({order}) => {
  const [date, setDate] = useState(null)

  useEffect(() => {
    formatDate()
  }, [])
  
  const formatDate = () => {
    const orderDate = order.orderDate
    const formattedDate =moment(orderDate).format("DD/MM/YYYY");
    setDate(formattedDate)
  };
  return (
    <div className = "order">
        <p> Order Date: {date}</p>
        <h3> Products in Order: {order.details?.map((detail,key)=> <p key = {key}> {detail.name} X {detail.count}</p>)}</h3>  
    </div>
  )
}

export default Order