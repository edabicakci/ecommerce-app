import React from "react";
import { useState, useEffect } from "react";
import { baseService } from "../network/services/baseService";
import Order from "./Order";
import { Row, Col } from "antd";

const Orders = ({ customerID }) => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const orderData = await baseService.get("/orders");
      console.log("orders", orderData);
      console.log("orders customerID", customerID);
      const filteredData = orderData.filter(
        (order) => order.customerId === customerID
      );
      console.log("orderData", filteredData);
      setOrders(filteredData);

    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Row style = {{marginTop: "6%"}}>
      {orders.length > 0 ? orders.map((order, key) =>   
        <Col key = {key} xs={24} xl={8}> 
          <Order key={key} order={order}/> 
        </Col>)
        : <h1>Henüz Sipariş Vermediniz!</h1>
      }
    </Row>
  );
};

export default Orders;
