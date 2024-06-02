import React from 'react';

const Product = ({ image, desc, price, onAddToCart, value, onAdd, onSubtract, openModal }) => (
  <div className="product row align-items-center mb-3">
    <div className="col-md-3">
      <img src={image} alt={desc} className="img-fluid" onClick={openModal} />
    </div>
    <div className="col-md-3">
      <div className="product-name">{desc}</div>
      <div className="product-price text-danger">${price}</div>
    </div>
    <div className="col-md-3 d-flex align-items-center">
      <div className="btn-group">
        <button className="btn btn-secondary" onClick={onSubtract}>-</button>
        <input type="number" className="form-control input-quantity" value={value} min={0} readOnly />
        <button className="btn btn-secondary" onClick={onAdd}>+</button>
      </div>
    </div>
    <div className="col-md-3 text-right">
      <button className="btn btn-primary" onClick={onAddToCart}>Add to Cart</button>
    </div>
  </div>
);

export default Product;
