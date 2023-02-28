import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { selectItems } from "../../features/items/basketSlice";
import { useSelector } from "react-redux";

const NavBar = () => {
  const items = useSelector(selectItems);

  return (
    <div className="nav">
      <div className="iconsContainer">
        <Link className="link" to={"/checkout"}>
          <ShoppingCartIcon className="basketIcon" />
        </Link>
        <p>{items.length}</p>
      </div>
    </div>
  );
};

export default NavBar;
