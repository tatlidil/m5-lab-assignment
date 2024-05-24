import React from 'react';

const Product = ({ image, desc, price, onAddToCart, value, onAdd, onSubtract, openModal }) => (
  <div className="product row align-items-center">
    <div className="col-md-3">
      <img src={image} alt={desc} className="img-fluid" onClick={() => openModal()} />
    </div>
    <div className="col-md-3">
      <div className="product-name">{desc}</div>
      <div className="product-price">${price}</div>
    </div>
    <div className="col-md-3">
      <div className="btn-group">
        <button className="btn btn-secondary" onClick={onSubtract}>-</button>
        <input type="number" className="form-control input-quantity" value={value} min={0} readOnly />
        <button className="btn btn-secondary" onClick={onAdd}>+</button>
      </div>
    </div>
    <div className="col-md-3">
      <button 
        className="btn btn-primary mt-2" 
        onClick={() => {
          console.log(`Adding product to cart: ${desc}, Quantity: ${value}`);
          onAddToCart();
        }}
      >
        Add to Cart
      </button>
    </div>
  </div>
);

export default Product;
