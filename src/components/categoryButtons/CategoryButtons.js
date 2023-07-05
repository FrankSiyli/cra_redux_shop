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
      <div className="dropdown m-3 ">
        <button
          style={{ marginTop: "7rem" }}
          className="btn btn-primary dropdown-toggle "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Product Category
        </button>
        <ul className="dropdown-menu m-3 ">
          <button
            className="btn btn-primary sm m-1"
            onClick={() => dispatch(setCategory("all"))}
          >
            ALL
          </button>
          {categoryNames?.map((categoryName) => (
            <button
              className="btn btn-primary sm m-1"
              key={categoryName}
              onClick={() => dispatch(setCategory(categoryName))}
            >
              {categoryName.toUpperCase()}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryButtons;
