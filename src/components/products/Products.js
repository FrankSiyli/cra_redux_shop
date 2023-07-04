import React from "react";
import { useGetAllProductsQuery } from "../../redux/apis/productsApi";
import { useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/productsSlice";
import { useDispatch } from "react-redux";
import "../../global.css";

const Products = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  console.log(products);
  const category = useSelector((state) => state.category);
  const filteredProducts = products?.filter(
    (product) => category === "all" || category === product.category
  );
  const dispatch = useDispatch();
  return (
    <>
      {error && (
        <h3 className="text-white text-center">Oh no, there was an error</h3>
      )}
      {isLoading && <h3 className="text-white text-center">Loading...</h3>}
      {products && (
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col mb-4">
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
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
