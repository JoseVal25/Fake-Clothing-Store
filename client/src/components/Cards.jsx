import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProdutcs();
  }, []);

  const getAllProdutcs = async () => {
    const products = await axios("http://localhost:3001/items");
    if (products.data) {
      setProducts(products.data);
    }
    return products.data;
  };
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
