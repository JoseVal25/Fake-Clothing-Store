import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="headerLink" to={"/"}>
        <h1>StoreApp</h1>
      </Link>
    </div>
  );
};

export default Header;
