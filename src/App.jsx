import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Guard from "./components/Guard";
import AddProduct from "./pages/AddProduct";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
const App = () => {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    setProducts(data.products);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Guard>
              <Dashboard products={products} />
            </Guard>
          }
        />
        <Route
          path="/addproduct"
          element={
            <Guard>
              <AddProduct products={products} setProducts={setProducts} />
            </Guard>
          }
        />
      </Routes>
    </>
  );
};

export default App;
