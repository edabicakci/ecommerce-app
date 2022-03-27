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
      <p> Order Date: {date}</p>
      <p> Products in Order:
        {order.details?.map((detail, key) => (
         
          <p key={key}>
            {detail.name}: <span style= {{color:"blue"}}> {detail.unitPrice} X {detail.count} </span>
          </p>
        ))}
      </p>
      <p> Total Payment: { totalPayment } TL</p>
    </Card>
  );
};

export default Order;