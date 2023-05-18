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

  return (
    <>
      <button onClick={() => dispatch(setCategory("all"))}>ALL</button>
      {categoryNames?.map((categoryName) => (
        <button
          key={categoryName}
          onClick={() => dispatch(setCategory(categoryName))}
        >
          {categoryName.toUpperCase()}
        </button>
      ))}
    </>
  );
};

export default CategoryButtons;
