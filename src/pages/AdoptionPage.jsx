import React, { useState } from 'react';
import { adoptionPets } from '../data/data';
import './AdoptionPage.css';

const AdoptionPage = () => {
  const [selectedPet, setSelectedPet] = useState(null);

  // Function to scroll down to the pets section
  const scrollToPets = () => {
    const petsSection = document.getElementById('pets-section');
    if (petsSection) {
      petsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle WhatsApp redirect
  const handleWhatsAppClick = (petName) => {
    const phoneNumber = "2349134222588"; // Your number without the +
    const message = encodeURIComponent(`Hello PetLife! I am interested in adopting ${petName}. Please provide more details.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    setSelectedPet(null); // Close modal
  };

  return (
    <div className="adoption-page">
      {/* Hero */}
      <section className="adoption-hero">
        <div className="adoption-hero-content">
          <h1>Adopt. Give Them a Home.</h1>
          <p>Every animal deserves love, care and a second chance. Find your new best friend today.</p>
          <button className="btn btn-primary" onClick={scrollToPets}>
            View Available Pets
          </button>
        </div>
        <div className="adoption-hero-image">
          <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500" alt="Dog" />
        </div>
      </section>

      {/* Featured for Adoption */}
      <section id="pets-section" className="section container">
        <div className="section-header">
          <h2 className="section-title">Featured for Adoption</h2>
          <span className="view-all">View all →</span>
        </div>
        <div className="grid-4">
          {adoptionPets.map((pet) => (
            <div key={pet.id} className="card adoption-card">
              <img src={pet.image} alt={pet.name} className="card-img" />
              <div className="card-body">
                <h3 className="card-title">{pet.name}</h3>
                <p className="adoption-info">{pet.age} • {pet.gender}</p>
                <button 
                  className="btn btn-primary btn-small" 
                  style={{ marginTop: 10, width: '100%' }}
                  onClick={() => setSelectedPet(pet)}
                >
                  Adopt Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Adoption Modal */}
      {selectedPet && (
        <div className="modal-overlay" onClick={() => setSelectedPet(null)}>
          <div className="adoption-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedPet(null)}>✕</button>
            
            <div className="modal-header">
              <img src={selectedPet.image} alt={selectedPet.name} className="modal-img" />
              <div className="modal-title-group">
                <h2>Adopt {selectedPet.name}</h2>
                <p>{selectedPet.age} • {selectedPet.gender}</p>
              </div>
            </div>

            <div className="modal-body">
              <p>Thank you for choosing to give <strong>{selectedPet.name}</strong> a loving home! 🐾</p>
              <p>To complete the adoption process and schedule a meet-and-greet, please contact our adoption team directly on WhatsApp.</p>
              
              <button 
                className="btn btn-primary whatsapp-btn" 
                onClick={() => handleWhatsAppClick(selectedPet.name)}
              >
                💬 Chat on WhatsApp
              </button>
              
              <p className="modal-note">Our team usually responds within 1 hour during business hours.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdoptionPage;