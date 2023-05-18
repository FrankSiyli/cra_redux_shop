import React from "react";
import { useGetAllProductsQuery } from "../../redux/apis/productsApi";
import { setCategory } from "../../redux/slices/categorySlice";
import { useDispatch } from "react-redux";

const CategoryButtons = () => {
  const dispatch = useDispatch();
  const { data: products } = useGetAllProductsQuery("");
  const categoryNames = [];
  products?.forEach((product) => {
    if (!categoryNames.includes(product.category)) {
      categoryNames.push(product.category);
    }
  });
  console.log(categoryNames);
  return (
    <>
      <button onClick={() => dispatch(setCategory("all"))}>all</button>
      <button onClick={() => dispatch(setCategory("men's clothing"))}>
        "men's clothing"
      </button>
      <button onClick={() => dispatch(setCategory("jewelery"))}>
        "jewelery"
      </button>
      <button onClick={() => dispatch(setCategory("electronics"))}>
        "electronics"
      </button>
      <button onClick={() => dispatch(setCategory("women's clothing"))}>
        "women's clothing"
      </button>
    </>
  );
};

export default CategoryButtons;
