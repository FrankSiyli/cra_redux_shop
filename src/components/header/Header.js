import React from "react";
import { useSelector } from "react-redux";
import Users from "../users/Users";
import { Link } from "react-router-dom";

const Header = () => {
  const products = useSelector((state) => state.products);

  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <>
      <nav
        className=" navbar navbar-expand-lg navbar-light bg-light "
        style={{
          position: "fixed",
          width: "100%",
          top: "0",
          left: "0",
          zIndex: "100",
        }}
      >
        <div className="container d-flex justify-content-between ">
          <div>
            <Link to="/" className="navbar-brand">
              Redux-Shop
            </Link>
          </div>
          <div>
            <Users />
          </div>
          <div>
            <div
              style={{ borderRadius: "5px" }}
              className="border border-primary"
            >
              <Link to="/cart" style={{ textDecoration: "none" }} className="">
                <span class="row p-1 pb-0 ">
                  <div style={{ textDecoration: "underline" }} className="col ">
                    Cart
                  </div>
                  <p className="col text-black "> {totalPrice.toFixed(2)}€</p>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
