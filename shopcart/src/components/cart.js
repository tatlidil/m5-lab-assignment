// src/components/cart.js
import React from 'react';

const Cart = ({ cartItems }) => (
  <div className="container mt-3">
    <h2>Your Cart Items</h2>
    {cartItems.map((item, index) => (
      <div key={index} className="product row align-items-center">
        <div className="col-md-4">
          <img src={item.image} alt={item.desc} className="img-fluid" />
        </div>
        <div className="col-md-4">
          <div className="product-name">{item.desc}</div>
          <div className="product-price">${item.price}</div>
          <div>Quantity: {item.value}</div>
        </div>
      </div>
    ))}
  </div>
);

export default Cart;
