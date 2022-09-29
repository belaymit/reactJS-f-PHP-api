import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Cart from "./components/pages/Cart/Cart"
import {Routes, Route} from "react-router-dom";
import Product from './components/Product/Product';
import Signup from "./components/pages/Signup/Signup";

import './App.css';
import ProductList from './components/productList/ProductList';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/carts" element={<Cart/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/product-list" element ={<ProductList/>}/>
          <Route path="/sign-up" element={<Signup/>}/>          
      </Routes>
    </>
  );
}

export default App;
