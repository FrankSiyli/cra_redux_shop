import React from "react";
import { useSelector } from "react-redux";
import { uid } from "uid";
import { removeFromCart } from "../../redux/slices/productsSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-4 m-5">
        {products?.map((product) => (
          <div key={uid()} className="col mb-4">
            <div
              style={{
                height: "400px",
              }}
              className="card bg-base-100 shadow-xl text-center m-3"
            >
              <figure>
                <img
                  style={{
                    marginTop: "5px",
                    width: "100%",
                    height: "100px",
                    objectFit: "contain",
                  }}
                  src={product.image}
                  alt="products"
                />
              </figure>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
              </div>
              <div>
                <p className="fs-4">{product.price.toFixed(2)}€</p>
              </div>
              <button
                className="btn btn-primary absolute "
                onClick={() => dispatch(removeFromCart(product))}
              >
                remove from cart
              </button>
            </div>
          </div>
        ))}
        <div style={{ marginTop: "25vh" }} className="text-white text-center">
          {products.length === 0 && <h3>Cart is empty</h3>}
          {<h3>Total Price: {totalPrice.toFixed(2)}€</h3>}
        </div>
      </div>
    </>
  );
};

export default Cart;
