// src/components/product.js
import React from 'react';

const Product = ({ image, desc, price, onAddToCart, value, onAdd, onSubtract, openModal }) => (
  <div className="product row align-items-center">
    <div className="col-md-4">
      <img src={image} alt={desc} className="img-fluid" onClick={() => openModal()} />
    </div>
    <div className="col-md-4">
      <div className="product-name">{desc}</div>
      <div className="product-price">${price}</div>
    </div>
    <div className="col-md-4">
      <button className="btn btn-secondary" onClick={onSubtract}>-</button>
      <input type="number" className="form-control" value={value} min={0} readOnly />
      <button className="btn btn-secondary" onClick={onAdd}>+</button>
      <button className="btn btn-primary mt-2" onClick={onAddToCart}>Add to Cart</button>
    </div>
  </div>
);

export default Product;
