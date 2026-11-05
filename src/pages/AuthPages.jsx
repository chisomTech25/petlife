import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AuthPages.css';

// --- Welcome / Guest Page ---
export const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-page welcome-page">
      <div className="auth-container">
        <div className="auth-logo">🐾 PetLife</div>
        <h1>Welcome to PetLife</h1>
        <p className="auth-subtitle">Discover, Learn, Care, and Adopt. Your journey to better pet care starts here.</p>
        
        <div className="auth-buttons">
          <button className="btn-auth btn-primary" onClick={() => navigate('/login')}>
            Login to Account
          </button>
          <button className="btn-auth btn-outline" onClick={() => navigate('/register')}>
            Create New Account
          </button>
          <button className="btn-auth btn-guest" onClick={() => navigate('/')}>
            Continue as Guest →
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Login Page ---
export const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login successful! Welcome back.');
    navigate('/');
  };

  return (
    <div className="auth-page login-page">
      <div className="auth-container">
        <div className="auth-logo">🐾 PetLife</div>
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Login to access your cart, saved guides, and adoption preferences.</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="password-input-wrapper">
              <input 
                type={showPassword ? 'text' : 'password'} 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
                placeholder="••••••••" 
              />
              <button 
                type="button" 
                className="password-toggle" 
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>
          <button type="submit" className="btn-auth btn-primary full-width">Login</button>
        </form>

        <div className="auth-footer">
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
          <button className="btn-guest-link" onClick={() => navigate('/')}>Continue as Guest</button>
        </div>
      </div>
    </div>
  );
};

// --- Register Page ---
export const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Registration successful! Please login.');
    navigate('/login');
  };

  return (
    <div className="auth-page register-page">
      <div className="auth-container">
        <div className="auth-logo">🐾 PetLife</div>
        <h2>Create Account</h2>
        <p className="auth-subtitle">Join the PetLife community today.</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Nuel Lee" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="password-input-wrapper">
              <input 
                type={showPassword ? 'text' : 'password'} 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
                placeholder="••••••••" 
              />
              <button 
                type="button" 
                className="password-toggle" 
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <div className="password-input-wrapper">
              <input 
                type={showConfirmPassword ? 'text' : 'password'} 
                name="confirmPassword" 
                value={formData.confirmPassword} 
                onChange={handleChange} 
                required 
                placeholder="••••••••" 
              />
              <button 
                type="button" 
                className="password-toggle" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>
          <button type="submit" className="btn-auth btn-primary full-width">Create Account</button>
        </form>

        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
          <button className="btn-guest-link" onClick={() => navigate('/')}>Continue as Guest</button>
        </div>
      </div>
    </div>
  );
};