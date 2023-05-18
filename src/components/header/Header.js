import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Users from "../users/Users";

const Header = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <h1> Redux-Shop</h1>
      <Users />
      <Link to="/">Home</Link>
      <br />
      <Link to="/cart">Cart ({products.length})</Link>
      <hr />
    </>
  );
};

export default Header;
