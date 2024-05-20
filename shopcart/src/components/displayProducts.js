import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Product from './product';

const DisplayProducts = ({ products, onAddToCart, onSubtract, onAdd, openModal }) => {
  const [show, setShow] = useState(false);
  const [activeProduct, setActiveProduct] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setActiveProduct(product);
    setShow(true);
  };

  return (
    <div className="container mt-3">
      {products.map(product => (
        <Product
          key={product.id}
          {...product}
          onAddToCart={() => onAddToCart(product)}
          onAdd={() => onAdd(product.id)}
          onSubtract={() => onSubtract(product.id)}
          openModal={() => handleShow(product)}
        />
      ))}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{activeProduct.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={activeProduct.image} width="350" alt={activeProduct.desc} className="mx-5" />
          <p><span className="text-dark">Ratings:</span> {activeProduct.ratings}/5</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DisplayProducts;
