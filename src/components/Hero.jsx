import React from 'react';
import resto from '../assets/resto.jpg';
const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${resto})` }}>
      <div className="container">
        <div className="hero-content">
          <h1>Discover the Taste of World</h1>
          <p>Experience the finest culinary journey</p>
          <div className="cta-buttons">
            <button className="btn-primary">Order Now</button>
            <button className="btn-secondary">View Menu</button>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Hero;