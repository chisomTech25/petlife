import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animals, products } from '../data/data';
import { useCart } from '../context/CartContext';
import './Homepage.css';

const Homepage = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { icon: '🐕', label: 'Dogs' },
    { icon: '🐈', label: 'Cats' },
    { icon: '🦜', label: 'Birds' },
    { icon: '🐟', label: 'Fish' },
    { icon: '🐍', label: 'Small Pets' },
    { icon: '🦎', label: 'Reptiles' },
    { icon: '🦁', label: 'Wildlife' },
  ];

  const featuredAnimals = animals.slice(0, 4);
  const featuredProducts = products.slice(0, 4);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to animals page with search term
      window.location.href = `/animals?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover. Learn. Care.</h1>
          <p>Explore the amazing world of animals, learn how they live and find the best products for your pets.</p>
          <form onSubmit={handleSearch} className="hero-search">
            <input 
              type="text" 
              placeholder="Search for an animal..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">🔍</button>
          </form>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600" alt="Dog and Cat" />
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section container">
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <Link to={`/animals?category=${cat.label}`} key={i} className="category-card">
              <span className="category-icon">{cat.icon}</span>
              <span className="category-label">{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Animals */}
      <section className="section container">
        <div className="section-header">
          <h2 className="section-title">Featured Animals</h2>
          <Link to="/animals" className="view-all">View all →</Link>
        </div>
        <div className="grid-4">
          {featuredAnimals.map((animal) => (
            <Link to={`/animals/${animal.id}`} key={animal.id} className="card animal-card">
              <img src={animal.image} alt={animal.name} className="card-img" />
              <div className="card-body">
                <h3 className="card-title">{animal.name}</h3>
                <p className="card-subtitle">{animal.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    {/* Popular Products */}
  <section className="section container">
    <div className="section-header">
        <h2 className="section-title">Popular Pet Products</h2>
        <Link to="/shop" className="view-all">View all →</Link>
  </div>
        <div className="grid-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="card product-card">
              <img src={product.image} alt={product.name} className="card-img" />
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="product-price">₦{product.price.toLocaleString()}</p>
                <button 
                  className="btn btn-primary btn-small" 
                  style={{ marginTop: 8, width: '100%' }}
                  onClick={() => handleAddToCart(product)}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="banner-section container">
        <div className="banner">
          <div className="banner-content">
            <h2>Healthy Pets<br />Happy Lives</h2>
            <Link to="/shop" className="btn btn-primary">Shop Now</Link>
          </div>
          <div className="banner-image">
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500" alt="Happy Pets" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section container">
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon">📦</span>
            <h4>Trusted Products</h4>
            <p>100% genuine</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🚚</span>
            <h4>Fast Delivery</h4>
            <p>Across Nigeria</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📞</span>
            <h4>24/7 Support</h4>
            <p>We're here to help</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;