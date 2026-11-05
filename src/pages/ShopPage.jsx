import React, { useState } from 'react';
import { products } from '../data/data';
import { useCart } from '../context/CartContext';
import './ShopPage.css';

const ShopPage = () => {
  const { addToCart } = useCart();
  const [priceRange, setPriceRange] = useState(30000);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Food', 'Toys', 'Beds', 'Accessories', 'Grooming'];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesPrice = p.price <= priceRange;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="shop-page">
      {/* Hero */}
      <section className="shop-hero">
        <div className="shop-hero-content">
          <h1>Everything Your Pet Needs</h1>
          <p>Quality pet products, great prices and fast delivery.</p>
          <div className="hero-search">
            <input 
              type="text" 
              placeholder="Search for products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button></button>
          </div>
        </div>
        <div className="shop-hero-image">
          <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500" alt="Pets" />
        </div>
      </section>

      <section className="container" style={{ padding: '40px 20px' }}>
        <div className="shop-layout">
          {/* Sidebar */}
          <aside className="shop-sidebar">
            <div className="sidebar-section">
              <h3>Categories</h3>
              <ul className="category-list">
                {categories.map((cat) => (
                  <li key={cat}>
                    <label className="checkbox-label">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                      />
                      <span>{cat}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-section">
              <h3>Price Range</h3>
              <div className="price-slider">
                <input
                  type="range"
                  min="0"
                  max="30000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="range-input"
                />
                <div className="price-display">
                  <span>₦0</span>
                  <span>₦{priceRange.toLocaleString()}</span>
                </div>
              </div>
              <button 
                className="btn btn-primary btn-small" 
                style={{ marginTop: 12, width: '100%' }}
                onClick={() => setPriceRange(30000)}
              >
                Reset Filter
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="shop-products">
            <div className="shop-header">
              <h2>All Products ({filteredProducts.length})</h2>
              <select className="sort-select">
                <option>Sort by: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-light)' }}>
                <p style={{ fontSize: 18 }}>No products found</p>
                <p>Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid-3">
                {filteredProducts.map((product) => (
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
                         Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;