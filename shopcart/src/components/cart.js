import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const Cart = ({ cartItems, isLoggedIn }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (isLoggedIn) {
      navigate('/checkout');
    } else {
      navigate('/signin');
    }
  };

  return (
    <Container className="mt-3">
      <h2>Your Cart Items</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>There are 0 items in your cart.</p>
          <Link to="/">
            <Button variant="success">Continue Shop</Button>
          </Link>
        </div>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="product row align-items-center mb-3">
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
          {cartItems.length > 0 && (
            <div className="row mt-3">
              <div className="col-12 text-left">
                <Button variant="primary" className="btn-primary btn-m" onClick={handleCheckout}>Check Out</Button>
              </div>
            </div>
          )}
        </div>
      )}
    </Container>
  );
};

export default Cart;
