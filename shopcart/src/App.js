import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar';
import DisplayProducts from './components/displayProducts';
import Cart from './components/cart';
import SignIn from './components/SignIn';
import Checkout from './components/Checkout';
import products from './productData';

class App extends Component {
  state = {
    cart: [],
    products: products,
    showModal: false,
    activeProduct: null,
    isLoggedIn: false // Add state for login status
  };

  addToCart = (product) => {
    this.setState(prevState => {
      const cart = [...prevState.cart];
      const itemIndex = cart.findIndex(item => item.id === product.id);
      if (itemIndex > -1) {
        cart[itemIndex].value += product.value;
      } else {
        cart.push({ ...product });
      }

      const products = prevState.products.map(p => {
        if (p.id === product.id) {
          return { ...p, value: 0 };
        }
        return p;
      });

      return { cart, products };
    });
  };

  handleAdd = (productId) => {
    const products = [...this.state.products];
    const product = products.find(p => p.id === productId);
    product.value++;
    this.setState({ products });
  };

  handleSubtract = (productId) => {
    const products = [...this.state.products];
    const product = products.find(p => p.id === productId);
    if (product.value > 0) {
      product.value--;
      this.setState({ products });
    }
  };

  openModal = (product) => {
    this.setState({ showModal: true, activeProduct: product });
  };

  closeModal = () => {
    this.setState({ showModal: false, activeProduct: null });
  };

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    const cartLength = this.state.cart.reduce((acc, item) => acc + item.value, 0);

    return (
      <Router>
        <div className="App">
          <Navbar cartLength={cartLength} />
          <Routes>
            <Route path="/" element={
              <DisplayProducts
                products={this.state.products}
                onAddToCart={this.addToCart}
                onAdd={this.handleAdd}
                onSubtract={this.handleSubtract}
                openModal={this.openModal}
              />
            } />
            <Route path="/cart" element={
              <Cart 
                cartItems={this.state.cart} 
                isLoggedIn={this.state.isLoggedIn}
              />
            } />
            <Route path="/signin" element={<SignIn onLogin={this.handleLogin} />} />
            <Route path="/checkout" element={
              this.state.isLoggedIn ? <Checkout /> : <SignIn onLogin={this.handleLogin} />
            } />
          </Routes>
          {this.state.showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={this.closeModal}>&times;</span>
                <img src={this.state.activeProduct.image} alt={this.state.activeProduct.desc} />
                <div>{this.state.activeProduct.desc}</div>
                <div>Ratings: {this.state.activeProduct.ratings}</div>
              </div>
            </div>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
