import React from "react";
import { addToBasket } from "../features/items/basketSlice";
import { useDispatch } from "react-redux";

const Card = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
    dispatch(addToBasket(product));
  };
  return (
    <div className="cardContainer">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p className="price">$ {price}</p>
      {/* <p className="category">{category}</p>
      <p className="description">{description}</p> */}
      <button onClick={addItemToBasket}>Add to basket</button>
    </div>
  );
};

export default Card;
