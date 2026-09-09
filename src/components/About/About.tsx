import React from 'react';
import { IMAGES } from '../../constants/images';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section" aria-label="About Marci Metzger">
      <div className="container">
        <div className="about-grid">
          {/* Left: Agent Portrait with Floating Quote Badge */}
          <div className="about-image-column">
            <div className="about-image-card">
              <img 
                src={IMAGES.marciPortrait} 
                alt="Marci Metzger - Principal Real Estate Specialist" 
                className="about-portrait"
                loading="lazy"
              />
              <div className="floating-quote-badge">
                <span className="floating-quote-text">
                  &ldquo;Your legacy is my priority.&rdquo;
                </span>
              </div>
            </div>
          </div>

          {/* Right: Bio, Metrics, Feature Cards, and CTA */}
          <div className="about-content-column">
            <span className="about-eyebrow">Meet Marci Metzger</span>
            <h2 className="about-heading">
              Nearly 3 Decades of Unrivaled Expertise
            </h2>

            <p className="about-bio">
              Licensed Realtor in Nevada for over two decades, and now serving the
              Pahrump market with the same dedication. The team helped nearly 90
              clients in 2023 and closed 28.5 million in sales. We work hard every
              day to grow and learn, so that we may continue to excel in our market.
              Our clients deserve our best, and we want to make sure our best is
              better every year.
            </p>

            {/* Feature Cards */}
            <div className="about-features-grid">
              <div className="feature-benefit-card">
                <div className="feature-icon-box">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <div>
                  <h3 className="feature-title">Market Analysis</h3>
                  <p className="feature-desc">
                    Deep insights into local trends and property values.
                  </p>
                </div>
              </div>

              <div className="feature-benefit-card">
                <div className="feature-icon-box">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="feature-title">White Glove Service</h3>
                  <p className="feature-desc">
                    Concierge-level attention throughout your journey.
                  </p>
                </div>
              </div>
            </div>

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
