import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const phoneNumber = "2349134222588"; // Your number without the '+'

  const team = [
    { name: 'Dr. Adebayo', role: 'Veterinarian', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200' },
    { name: 'Sarah Johnson', role: 'Pet Nutritionist', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200' },
    { name: 'Michael Chen', role: 'Animal Behaviorist', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200' },
  ];

  const values = [
    { icon: '📚', title: 'Trusted Information', desc: 'Accurate and reliable pet care knowledge' },
    { icon: '🏆', title: 'Quality Products', desc: 'Only the best for your pets' },
    { icon: '😊', title: 'Happy Pets', desc: 'Your pet happiness is our priority' },
    { icon: '🤝', title: 'Stronger Communities', desc: 'Building pet-loving communities' },
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About PetLife</h1>
          <p>Better care. Happier pets. A kinder world.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">Our Mission</h2>
            <p>At PetLife, we are passionate about animals and their well-being. Our mission is to provide trusted information, quality pet products, and support for responsible pet ownership.</p>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500" alt="Team" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section container" style={{ background: 'var(--bg-lighter)', padding: '40px', borderRadius: 'var(--radius)' }}>
        <div className="values-grid">
          {values.map((val, i) => (
            <div key={i} className="value-card">
              <span className="value-icon">{val.icon}</span>
              <h4>{val.title}</h4>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="section container">
        <div className="about-grid reverse">
          <div className="about-text">
            <h2 className="section-title">Our Vision</h2>
            <p>A world where every animal is safe, healthy and loved. We envision communities where pets and people thrive together.</p>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500" alt="Vision" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 30 }}>Our Team</h2>
        <div className="grid-3">
          {team.map((member, i) => (
            <div key={i} className="card team-card">
              <img src={member.image} alt={member.name} className="card-img" style={{ height: 250 }} />
              <div className="card-body team-card-body">
                <h3 className="card-title">{member.name}</h3>
                <p className="card-subtitle">{member.role}</p>
                
                {/* WhatsApp and Telegram Buttons */}
                <div className="team-contact-btns">
                  <a
                    href={`https://wa.me/${phoneNumber}?text=Hello PetLife, I would like to speak with ${member.name} regarding their expertise as a ${member.role}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-btn whatsapp-btn"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href={`https://t.me/+${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-btn telegram-btn"
                  >
                    ✈️ Telegram
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;