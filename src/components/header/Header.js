import React from "react";
import { useSelector } from "react-redux";
import Users from "../users/Users";
import { Link } from "react-router-dom";

const Header = () => {
  const products = useSelector((state) => state.products);

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
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto "></ul>
              <form className="d-flex">
                <Link to="/cart" className="btn btn-outline-dark">
                  <i className="bi-cart-fill me-1"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">
                    {products.length}
                  </span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
