import React from "react";
import {useNavigate} from "react-router-dom"
import  "./styles.css";

const Category = (props) => {
  const {category} = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${category.id}/productList`)

  }
  return (
    <div className='category' onClick={handleClick}>
      {
        <>
          <h1> {category.name}</h1>
          <p> {category.description}</p>
        </>
      }
    </div>
  );
};

export default Category;
