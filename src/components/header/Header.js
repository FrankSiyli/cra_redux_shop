import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <h1> home-page</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/cart">Cart ({products.length})</Link>
      <hr />
    </>
  );
};

export default Header;
