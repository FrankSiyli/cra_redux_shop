import React from "react";
import { useGetAllProductsQuery } from "../../redux/apis/productsApi";
import { setCategory } from "../../redux/slices/categorySlice";
import { useDispatch } from "react-redux";

const CategoryButtons = () => {
  const dispatch = useDispatch();
  const { data: products } = useGetAllProductsQuery("");
  const categoryNames = [];
  products?.forEach((product) => {
    if (!categoryNames.includes(product.category.name)) {
      categoryNames.push(product.category.name);
    }
  });
  return (
    <>
      <button onClick={() => dispatch(setCategory("all"))}>all</button>
      <button onClick={() => dispatch(setCategory("Furniture"))}>
        Furniture
      </button>
      <button onClick={() => dispatch(setCategory("Electronic"))}>
        Electronic
      </button>
      <button onClick={() => dispatch(setCategory("nuevo"))}>nuevo</button>
      <button onClick={() => dispatch(setCategory("Cosmatic"))}>
        Cosmatic
      </button>
      <button onClick={() => dispatch(setCategory("Shoes"))}>Shoes</button>
    </>
  );
};

export default CategoryButtons;
