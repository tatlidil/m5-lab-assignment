import React, { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from './components/product.js'; 

class App extends Component {
  state = {
    cart: [],
    products: [
      { id: 1, desc: 'Unisex Cologne', image: './products/cologne.jpg', price: 35, value: 0 },
      { id: 2, desc: 'Apple iWatch', image: './products/iwatch.jpg', price: 199, value: 0 },
      { id: 3, desc: 'Unique Mug', image: './products/mug.jpg', price: 15, value: 0 },
      { id: 4, desc: 'Mens Wallet', image: './products/wallet.jpg', price: 48, value: 0 }
    ]
  };

  addToCart = (product) => {
    this.setState(prevState => ({
      cart: [...prevState.cart, product]
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Shop to React</h1>
          <div>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span> {this.state.cart.length} items</span>
          </div>
        </header>
        <div className="container mt-3">
          {this.state.products.map(product => (
            <Product key={product.id} {...product} onAddToCart={() => this.addToCart(product)} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

