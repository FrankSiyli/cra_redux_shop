import { useGetAllProductsQuery } from "./redux/apis/productsApi";

function App() {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  console.log(products);

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : products ? (
        <>
          {products?.map((product) => (
            <p key={product.id}>{product.title}</p>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default App;
