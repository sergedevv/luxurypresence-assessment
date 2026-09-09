import React from 'react';
import { IMAGES } from '../../constants/images';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section" aria-label="About Marci Metzger">
      <div className="container">
        <div className="about-grid">
          {/* Left: Agent Portrait */}
          <div className="about-image-column">
            <div className="about-image-card">
              <img 
                src={IMAGES.marciPortrait} 
                alt="Marci Metzger - Principal Real Estate Specialist" 
                className="about-portrait"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Bio and CTA */}
          <div className="about-content-column">
            <span className="about-eyebrow">Meet Marci Metzger</span>
            <h2 className="about-heading">
              Nearly 3 Decades of Unrivaled Expertise
            </h2>

            <p className="about-bio">
              Licensed Realtor in Nevada for over two decades, and now serving the
              Pahrump market with the same dedication. The team helped nearly 90
              clients in 2021 and closed 28.5 million in sales. We work hard every
              day to grow and learn, so that we may continue to excel in our market.
              Our clients deserve our best, and we want to make sure our best is
              better every year.
            </p>

            {/* CTA Link */}
            <a href="#contact" className="about-cta-link">
              <span>Discover More Today</span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
