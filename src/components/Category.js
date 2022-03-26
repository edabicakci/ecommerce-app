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
    style={{ width: 300, margin: 20}}
    cover={<div style={{ overflow: "hidden", height: "100px" , width: "100px"}}>
    <img
      alt="example"
      style = {{height: "100%"}}
      src="https://cdn.dribbble.com/users/1142856/screenshots/5318174/icons_categories_interactivemap-13.png"
    />
  </div>}
    onClick = {showProducts}>
    <Meta title={category.name} description={category.description} />
  </Card>
    
  );
};

export default Category;
