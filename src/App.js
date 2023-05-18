import { useGetAllProductsQuery } from "./redux/apis/productsApi";

function App() {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
const categoryNames = []

products?.forEach((product)=> {
if(!categoryNames.includes(product.category.name)){
categoryNames.push(product.category.name)
}})


  return (
    <div className="App">
      {error && <h3>Oh no, there was an error</h3>}
      {isLoading && <h3>Loading...</h3>}
      <button>all</button>
      <button>Furniture</button>
      <button>Electronic</button>
      <button>nuevo</button>
      <button>Cosmatic</button>
      <button>Shoes</button>
      {products && (
        <>
          {products?.map((product) => (
            <p key={product.id}>{product.title}</p>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
