import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './AuthContext'; 

const Login = () => {
  const { login, logout, isAuthenticated } = useAuth(); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username === 'ECI-Group' && formData.password === 'phase5project') {
      alert('Login successful, redirecting to home page');

      toast.success('Login successful!', {
        position: 'top-center',
        autoClose: 3000,
      });

      login(); 
      navigate('/');
    } else {
      toast.error('Invalid credentials. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };

  const handleLogout = () => {
    logout(); 
    navigate('/login'); 
  };

  return (
    <div className="login-container">
      <h2>{isAuthenticated ? 'Logout' : 'Login'}</h2>
      {isAuthenticated && (
        <button onClick={handleLogout} className="submit-btn">
          Logout
        </button>
      )}
      {!isAuthenticated && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              placeholder='username'
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              placeholder='password'
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
