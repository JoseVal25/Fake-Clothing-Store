import React from "react";
import FilterSection from "./FilterSection.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import NavBar from "./NavBar.jsx";
import Cards from "../Cards.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <FilterSection />
      <Cards />
      <Footer />
    </>
  );
};

export default Layout;
