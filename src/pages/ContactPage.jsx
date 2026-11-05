import React, { useState } from 'react';
import LocationMap from '../components/LocationMap';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message, ask a question or just say hi.</p>
        </div>
        <div className="contact-hero-image">
          <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500" alt="Dog" />
        </div>
      </section>

      <section className="container" style={{ padding: '40px 20px' }}>
        <div className="contact-layout">
          <div className="contact-info">
            <h3>Our Contact Info</h3>
            <div className="contact-details">
              <div className="contact-detail-item">
                <span>📞</span>
                <div>
                  <strong>Phone / WhatsApp / Telegram</strong>
                  <p>+234 913 422 2588</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <span>✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>support@petlife.com</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <span>📍</span>
                <div>
                  <strong>Address</strong>
                  <p>Area 3, Garki, Federal Capital Territory, Abuja</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <span>🕐</span>
                <div>
                  <strong>Hours</strong>
                  <p>Mon - Sat: 8am - 6pm</p>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <LocationMap />
          </div>

          <div className="contact-form-wrapper">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="5"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;