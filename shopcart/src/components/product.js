import React from 'react';

const Product = ({ image, desc, price, onAddToCart, value }) => (
  <div className="product row align-items-center">
    <div className="col-md-4">
      <img src={image} alt={desc} className="img-fluid" />
    </div>
    <div className="col-md-4">
      <div className="product-name">{desc}</div>
      <div className="product-price">${price}</div>
    </div>
    <div className="col-md-4">
      <input type="number" className="form-control" value={value} min={0} />
      <button className="btn btn-primary mt-2" onClick={onAddToCart}>Add to Cart</button>
    </div>
  </div>
);

export default Product;
