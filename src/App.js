import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
