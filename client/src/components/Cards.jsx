import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../features/products/productsSlice";
import { getAllProducts } from "../features/products/productsSlice";

const Cards = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="cardsDiv">
      {products.length &&
        products.map((product) => (
          <article key={product.id}>
            <Card
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              image={product.image}
            />
          </article>
        ))}
    </div>
  );
};

export default Cards;
