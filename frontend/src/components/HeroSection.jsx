import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/restaurant.jpg" alt="Elegant restaurant" className="hero-bg" />
      <div className="hero-content">
        <h3 className="brand-name">Celebrease</h3>
        <div className="hero-text">
          <h1>Your Personal Dream Maker</h1>
          <p>
            We believe it's all about BIG DREAMS and the little details that make them come true!
          </p>
          <Link 
            to="contact" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="book-now-btn"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
