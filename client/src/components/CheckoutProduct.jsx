import React from "react";
import { removeFromBasket } from "../features/items/basketSlice";
import { useDispatch } from "react-redux";

const CheckoutProduct = ({ id, title, image, price }) => {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="checkout-product">
      <div className="first">
        <img src={image} alt="" />
      </div>
      <div className="middle">
        <h2>{title}</h2>
        <p>$ {price}</p>
      </div>
      <div className="last">
        <label htmlFor="quantity">Quantity: </label>
        <input type="number" name="quantity" min={0} />
        <button onClick={removeItemFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
