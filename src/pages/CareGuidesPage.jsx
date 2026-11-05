import React, { useState } from 'react';
import { careGuides } from '../data/data';
import './CareGuidesPage.css';

const CareGuidesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedGuide, setSelectedGuide] = useState(null); // State for the modal

  const guideCategories = [
    { icon: '📚', label: 'All' },
    { icon: '🍽️', label: 'Feeding' },
    { icon: '❤️', label: 'Health' },
    { icon: '🛁', label: 'Grooming' },
    { icon: '🎓', label: 'Training' },
    { icon: '🏃', label: 'Exercise' },
    { icon: '🏠', label: 'General' },
  ];

  const filteredGuides = activeCategory === 'All' 
    ? careGuides 
    : careGuides.filter((guide) => guide.category === activeCategory);

  return (
    <div className="care-guides-page">
      {/* Hero */}
      <section className="care-hero">
        <div className="care-hero-content">
          <h1>Pet Care Guides</h1>
          <p>Everything you need to know to keep your pets healthy, happy and safe.</p>
          <div className="hero-search">
            <input type="text" placeholder="Search care guides..." />
            <button>🔍</button>
          </div>
        </div>
        <div className="care-hero-image">
          <img src="https://images.unsplash.com/photo-1628009368231-7603352989c3?w=500" alt="Vet with dog" />
        </div>
      </section>

      {/* Guide Categories */}
      <section className="container" style={{ marginTop: 30 }}>
        <div className="guide-categories">
          {guideCategories.map((cat, i) => (
            <div 
              key={i} 
              className={`guide-cat-card ${activeCategory === cat.label ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.label)}
            >
              <span className="guide-cat-icon">{cat.icon}</span>
              <span className="guide-cat-label">{cat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Guides */}
      <section className="section container">
        <div className="section-header">
          <h2 className="section-title">
            {activeCategory === 'All' ? 'Latest Guides' : `${activeCategory} Guides`} 
            ({filteredGuides.length})
          </h2>
          <span className="view-all">View all →</span>
        </div>
        
        {filteredGuides.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-light)' }}>
            <p style={{ fontSize: 18 }}>No guides found in this category.</p>
          </div>
        ) : (
          <div className="grid-4">
            {filteredGuides.map((guide) => (
              // Added onClick to open the modal
              <div 
                key={guide.id} 
                className="card guide-card" 
                onClick={() => setSelectedGuide(guide)}
              >
                <img src={guide.image} alt={guide.title} className="card-img" />
                <div className="card-body">
                  <span className="guide-category">{guide.category}</span>
                  <h3 className="card-title" style={{ fontSize: 15, marginTop: 8 }}>{guide.title}</h3>
                  <p className="guide-date">{guide.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Guide Detail Modal */}
      {selectedGuide && (
        <div className="modal-overlay" onClick={() => setSelectedGuide(null)}>
          <div className="guide-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedGuide(null)}>✕</button>
            
            <img src={selectedGuide.image} alt={selectedGuide.title} className="guide-modal-img" />
            
            <div className="guide-modal-content">
              <span className="guide-category-badge">{selectedGuide.category}</span>
              <h2>{selectedGuide.title}</h2>
              <p className="guide-modal-date">📅 {selectedGuide.date}</p>
              <p className="guide-modal-text">{selectedGuide.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareGuidesPage;