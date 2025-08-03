import React from "react";
import ProductGrid from "../components/ProductGrid";

function Home() {
  return (
    <div className="home-page container">
      <section className="hero">
        <h1>Welcome to BlossomBox</h1>
        <p>Beautiful gifts & accessories delivered to your door.</p>
      </section>
      <section>
        <h2>Featured Products</h2>
        <ProductGrid />
      </section>
    </div>
  );
}

export default Home;