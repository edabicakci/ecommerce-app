import React from "react";
import { useState, useEffect } from "react";
import { baseService } from "../network/services/baseService";
import Order from "./Order";
import { Row, Col } from "antd";

const Orders = ({ custId }) => {
  const [orders, setOrders] = useState([]);
  const [customerID, setCustomerID] = useState(custId);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const orderData = await baseService.get("/orders");
      console.log("orders", orderData);
      console.log("custId", custId);
      console.log("first", customerID);
      setCustomerID(custId);
      const _orderData = orderData.filter(
        (order) => order.customerId === customerID
      );
      console.log("orderData", _orderData);
      setOrders([..._orderData]);
      console.log("customerId:", customerID);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Row style = {{marginTop: "6%"}}>
      {orders.length > 0 ? orders.map((order, key) =>   
        <Col xs={24} xl={8}> 
          <Order key={key} order={order}/> 
        </Col>)
        : <h1>Henüz Sipariş Vermediniz!</h1>
      }
    </Row>
  );
};

export default Orders;
