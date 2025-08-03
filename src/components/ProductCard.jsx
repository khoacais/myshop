import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
      </Link>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`} className="view-btn">
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;