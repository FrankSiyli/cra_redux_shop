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
      {products?.map((product) => (
        <p key={uid()}>
          {product.title}
          <button onClick={() => dispatch(removeFromCart(product))}>
            remove from cart
          </button>
        </p>
      ))}
      {products.length === 0 && <h3>Cart is empty</h3>}
      {<h3>Total Price: {totalPrice.toFixed(2)}€</h3>}
    </>
  );
};

export default Cart;
