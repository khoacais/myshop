import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function Product() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div className="container">
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div className="product-detail container">
      <img src={product.image} alt={product.name} className="detail-img" />
      <div>
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;