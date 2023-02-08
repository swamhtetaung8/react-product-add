import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { ImSpinner7 } from "react-icons/im";

const Dashboard = ({ products }) => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  return (
    <div className="container mx-auto ">
      <div className="mt-9 navbar flex justify-between bg-base-300 text-primary-content rounded-lg">
        <a className="btn btn-ghost normal-case text-xl">Dashboard</a>
        <div>
          <Link to="/addproduct">
            <button className="btn btn-accent mr-2">Add Product</button>
          </Link>
          <button onClick={logOutHandler} className=" btn btn-primary">
            Logout
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap gap-14 justify-evenly my-10">
        {products.length == 0 ? (
          <ImSpinner7 size={100} className=" animate-spin" />
        ) : (
          products.map((product) => <Card key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
};

export default Dashboard;
