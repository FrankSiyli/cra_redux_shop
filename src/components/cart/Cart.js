import React from "react";
import { useSelector } from "react-redux";
import { uid } from "uid";
import { removeFromCart } from "../../redux/slices/productSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  return (
    <>
      {products?.map((product) => (
        <p key={uid()}>
          {product.title}
          <button onClick={()=>dispatch(removeFromCart(product))} >remove from cart</button>
        </p>
      ))}
    </>
  );
};

export default Cart;
