import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Checkout from "../src/components/Checkout";
import Layout from "../src/components/layout/Layout";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
