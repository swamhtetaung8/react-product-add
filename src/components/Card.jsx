import React from "react";

const Card = ({ product }) => {
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <figure>
        <img
          src={product.thumbnail}
          className=" h-40 mt-10 rounded-lg max-w-[100%]"
          alt="Product-image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <div className="badge badge-accent my-3">{product.category}</div>
        <p>{product.description}</p>
        <div className="card-actions justify-between items-center">
          <p className=" font-bold text-teal-500">$ {product.price}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
