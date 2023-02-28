import React, { useState } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import NavBar from "./layout/NavBar";
import { useSelector } from "react-redux";
import { selectItems } from "../features/items/basketSlice";
import { selectTotal } from "../features/items/basketSlice";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <div>
      <Header />
      <NavBar />
      <div className="checkout-component">
        <div className="basketContainer">
          <h1>{items.length ? "Shopping Basket" : "Basket is empty"}</h1>
          {items?.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>

        <div className="sidebar">
          <p>Subtotal:</p>
          <p className="total">${total}</p>
          <button>Proceed to Checkout</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
