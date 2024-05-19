// src/components/navbar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ cartLength }) => (
  <header className="App-header">
    <Link to="/" className="navbar-brand">
      <h1>Shop 2 React</h1>
    </Link>
    <div>
      <Link to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span> {cartLength} items</span>
      </Link>
    </div>
  </header>
);

export default Navbar;
