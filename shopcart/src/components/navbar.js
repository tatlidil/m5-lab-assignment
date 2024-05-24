import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = ({ cartLength }) => (
  <header className="App-header">
    <Link to="/" className="navbar-brand text-white">
      <h1>Shop 2 <span className="d-inline-flex align-items-center"><i className="bi bi-r-circle-fill"></i></span>eact</h1>
    </Link>
    <div>
      <Link to="/cart" className="text-white text-decoration-none">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span> {cartLength} items</span>
      </Link>
    </div>
  </header>
);

export default Navbar;