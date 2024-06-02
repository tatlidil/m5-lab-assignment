import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import Product from './product';

const DisplayProducts = ({ products, onAddToCart, onSubtract, onAdd, openModal }) => {
  const [show, setShow] = useState(false);
  const [activeProduct, setActiveProduct] = useState({});
  const [sortOption, setSortOption] = useState('normal');

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setActiveProduct(product);
    setShow(true);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = [...products];
  switch (sortOption) {
    case 'lowest':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case 'highest':
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      sortedProducts.sort((a, b) => a.id - b.id);
  }

  return (
    <div className="container mt-3">
      <div className="row mb-3 justify-content-center">
        <div className="col-md-6 text-center">
          <Form.Group controlId="sortSelect" className="d-inline-block">
            <Form.Label className="mr-2">Sort Price By:</Form.Label>
            <Form.Control as="select" value={sortOption} onChange={handleSortChange} className="d-inline-block w-auto">
              <option value="normal">Normal</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </Form.Control>
          </Form.Group>
        </div>
      </div>
      {sortedProducts.map(product => (
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
