import React from 'react'
import "./styles.css"

const Order = ({order}) => {
  return (
    <div className = "order">
        <p> Order Date: {order.orderDate}</p>
        {/* <h3> Details: {order.details?.map(detail=> <p> {detail.name}</p>)}</h3>   */}
    </div>
  )
}

export default Order