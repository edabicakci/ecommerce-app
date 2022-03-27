import React from "react";
import {useNavigate} from "react-router-dom"
import  "./styles.css";
import { Card } from 'antd';

const Category = (props) => {
  const { Meta } = Card;
  const {category} = props;
  const navigate = useNavigate();

  const showProducts = () => {
    navigate(`/${category.id}/products`)

  }
  return (
    <Card
    hoverable
    style={{ width: "100%", height: "100%", padding:"5%" }}
    cover={<div style={{ overflow: "hidden", height: "40%" , width: "100%"}}>
    <img
      alt="example"
      style = {{width: "100%"}}
      src="https://cdn.dribbble.com/users/1142856/screenshots/5318174/icons_categories_interactivemap-13.png"
    />
  </div>}
    onClick = {showProducts}>
    <Meta title={category.name} description={category.description} />
  </Card>
    
  );
};

export default Category;
