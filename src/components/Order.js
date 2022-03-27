import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import moment from "moment";
import { Card } from "antd"

const Order = ({ order }) => {
  const [date, setDate] = useState(null);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    formatDate();
    calculateTotalPayment();
  }, []);

  const formatDate = () => {
    const orderDate = order.orderDate;
    const formattedDate = moment(orderDate).format("DD/MM/YYYY");
    setDate(formattedDate);
  };

  const calculateTotalPayment = () =>{
    let result = 0;
    order.details.map(detail => {
      result += detail.unitPrice * detail.count


    }  )
    setTotalPayment(result)
  }
  return (
    <Card>
      <h3> Order Date: {date}</h3>
      <h3> Products in Order:
        {order.details?.map((detail, key) => (
         
          <p key={key}>
            {detail.name}: <span style= {{color:"blue"}}> {detail.unitPrice} X {detail.count} </span>
          </p>
        ))}
      </h3>
      <h3> Total Payment: { totalPayment } TL</h3>
    </Card>
  );
};

export default Order;