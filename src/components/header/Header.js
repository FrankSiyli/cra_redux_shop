import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1> home-page</h1>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <hr />
    </>
  );
};

export default Header;
