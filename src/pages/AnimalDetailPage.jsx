import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { animals, relatedAnimals } from '../data/data';
import './AnimalDetailPage.css';

const AnimalDetailPage = () => {
  const { id } = useParams();
  const animal = animals.find((a) => a.id === parseInt(id));

  if (!animal) {
    return (
      <div className="container" style={{ padding: '60px 0', textAlign: 'center' }}>
        <h2>Animal not found</h2>
        <Link to="/animals" className="btn btn-primary" style={{ marginTop: 20 }}>
          Back to Animals
        </Link>
      </div>
    );
  }

  return (
    <div className="animal-detail-page">
      {/* Breadcrumb */}
      <div className="container" style={{ padding: '16px 20px' }}>
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/animals">Animals</Link> / <span>{animal.name}</span>
        </div>
      </div>

      {/* Main Info */}
      <section className="container">
        <div className="animal-detail-grid">
          <div className="animal-detail-image">
            <img src={animal.image} alt={animal.name} />
          </div>
          <div className="animal-detail-info">
            <h1>{animal.name}</h1>
            <p className="scientific-name">Scientific name: {animal.scientific}</p>
            <div className="animal-tags">
              <span className="badge badge-green">{animal.category}</span>
              <span className="badge badge-green">Wildlife</span>
            </div>

            <div className="quick-facts">
              <h3>Quick Facts</h3>
              <div className="facts-grid">
                <div className="fact-item">
                  <span className="fact-icon">⏱️</span>
                  <div>
                    <strong>Lifespan</strong>
                    <p>{animal.lifespan}</p>
                  </div>
                </div>
                <div className="fact-item">
                  <span className="fact-icon">️</span>
                  <div>
                    <strong>Weight</strong>
                    <p>{animal.weight}</p>
                  </div>
                </div>
                <div className="fact-item">
                  <span className="fact-icon">📏</span>
                  <div>
                    <strong>Height</strong>
                    <p>{animal.height}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs & Content */}
      <section className="container" style={{ marginTop: 30 }}>
        <div className="detail-tabs">
          <button className="tab-btn active">Overview</button>
          <button className="tab-btn">Diet</button>
          <button className="tab-btn">Habitat</button>
          <button className="tab-btn">Behaviour</button>
        </div>

        <div className="detail-content">
          <div className="detail-main">
            <div className="detail-section">
              <h3>How It Lives</h3>
              <p>{animal.description}</p>
            </div>
            <div className="detail-section">
              <h3>What Does It Eat?</h3>
              <p>{animal.diet}</p>
            </div>
            <div className="detail-section">
              <h3>Habitat</h3>
              <p>{animal.habitat}</p>
            </div>
            <div className="detail-section">
              <h3>Behaviour</h3>
              <p>{animal.behaviour}</p>
            </div>
          </div>

          <div className="detail-sidebar">
            <h3>Related Animals</h3>
            <div className="related-list">
              {relatedAnimals.map((rel) => (
                <Link to={`/animals/${rel.id}`} key={rel.id} className="related-item">
                  <img src={rel.image} alt={rel.name} />
                  <span>{rel.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimalDetailPage;