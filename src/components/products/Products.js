import React from "react";
import { useGetAllProductsQuery } from "../../redux/apis/productsApi";
import { useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/productSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  const category = useSelector((state) => state.category);
  const filteredProducts = products?.filter(
    (product) => category === "all" || category === product.category.name
  );
    const dispatch = useDispatch();
  return (
    <>
      {error && <h3>Oh no, there was an error</h3>}
      {isLoading && <h3>Loading...</h3>}
      {products && (
        <>
          {filteredProducts?.map((product) => 
            <p key={product.id}>{product.title}<button
            onClick={() => dispatch(addToCart(product))}
            >add to cart</button></p>,
            
          )}
        </>
      )}
    </>
  );
};

export default Products;
