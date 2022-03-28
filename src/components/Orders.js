import React from "react";
import { useState, useEffect } from "react";
import { baseService } from "../network/services/baseService";
import Order from "./Order";
import { List } from "antd";

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
      console.log("filteredData", filteredData);
      setOrders(filteredData);

    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
<>  
    {orders.length > 0 ?
    <List
    style = {{marginTop: "6%"}}
    itemLayout="horizontal"
    dataSource={orders}
    renderItem={order => (
      <List.Item>
        <Order order = {order} ></Order>
      </List.Item>
    )}
  /> : <h1 style = {{marginTop: "6%"}} >Henüz Sipariş Vermediniz!</h1>}
   </>
  );
};

export default Orders;
