import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="logo">
          BlossomBox
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;