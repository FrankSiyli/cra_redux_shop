import React from "react";
import { useGetAllProductsQuery } from "../../redux/apis/productsApi";
import { useSelector } from "react-redux";

const Products = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  const category = useSelector((state) => state.category);
  const filteredProducts = products?.filter((product)=>
  category === "all" || category === product.category.name)

  return (
    <>
      {error && <h3>Oh no, there was an error</h3>}
      {isLoading && <h3>Loading...</h3>}
      {products && (
        <>
          {filteredProducts?.map((product) => (
            <p key={product.id}>{product.title}</p>
          ))}
        </>
      )}
    </>
  );
};

export default Products;
