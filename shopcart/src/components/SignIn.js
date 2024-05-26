import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(); // Set the login state to true
    navigate('/checkout'); // Redirect to checkout page after login
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-light">
              <h2 className="mb-0">Sign In</h2>
            </div>
            <div className="card-body">
              <h5 className="card-title">Please login using one of the following:</h5>
              <div className="border p-3 mb-3">
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Your name" />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                  </div>
                  <button type="submit" className="btn btn-success mt-3">Login</button>
                </form>
              </div>
              <button className="btn btn-primary btn-block mt-3" onClick={handleLogin}>
                <i className="bi bi-facebook"></i> LOGIN WITH FACEBOOK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
