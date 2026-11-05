import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { animals } from '../data/data';
import './AnimalsPage.css';

const AnimalsPage = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Get category and search from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, [searchParams]);

  const categories = ['All', 'Mammals', 'Birds', 'Fish', 'Reptiles', 'Amphibians'];

  const filteredAnimals = animals.filter((animal) => {
    const matchesCategory = activeCategory === 'All' || animal.category === activeCategory;
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="animals-page">
      {/* Hero */}
      <section className="animals-hero">
        <div className="animals-hero-content">
          <h1>Explore the Animal Kingdom</h1>
          <p>Learn about different animals, their habitats, diets, behaviour and how they live.</p>
          <div className="hero-search">
            <input
              type="text"
              placeholder="Search for an animal..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button></button>
          </div>
        </div>
        <div className="animals-hero-image">
          <img src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600" alt="Lion" />
        </div>
      </section>

      {/* Category Filters */}
      <section className="container" style={{ marginTop: 30 }}>
        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Popular Animals */}
      <section className="section container">
        <div className="section-header">
          <h2 className="section-title">
            {searchTerm ? `Search Results (${filteredAnimals.length})` : 'Popular Animals'}
          </h2>
          <Link to="/animals" className="view-all">View all →</Link>
        </div>
        
        {filteredAnimals.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-light)' }}>
            <p style={{ fontSize: 18 }}>No animals found</p>
            <p>Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid-4">
            {filteredAnimals.map((animal) => (
              <Link to={`/animals/${animal.id}`} key={animal.id} className="card animal-card">
                <img src={animal.image} alt={animal.name} className="card-img" />
                <div className="card-body">
                  <h3 className="card-title">{animal.name}</h3>
                  <p className="card-subtitle">{animal.category}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default AnimalsPage;