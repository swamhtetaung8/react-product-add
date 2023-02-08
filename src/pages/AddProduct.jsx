import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ products, setProducts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const navigate = useNavigate();
  const addProductSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      title,
      description,
      category,
      price,
      thumbnail,
    };
    setProducts([newProduct, ...products]);
    navigate("/");
  };
  return (
    <div>
      <h1 className=" hero text-xl font-extrabold mt-4">Add New Product</h1>
      <form className="card-body" onSubmit={addProductSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Category</span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Price</span>
          </label>
          <input
            type="number"
            placeholder=""
            className="input input-bordered"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Image Url</span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className={`btn btn-primary `}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
