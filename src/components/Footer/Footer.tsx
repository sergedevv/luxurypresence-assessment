import React from 'react';
import logoBig from '../../assets/marcimetzgerlogobig.png';
import equalHousingLogo from '../../assets/equalhousingicon.png';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Social */}
          <div className="footer-brand-col">
            <img
              src={logoBig}
              alt="Marci Metzger Homes"
              className="footer-brand-logo"
            />
            <p className="footer-brand-desc">
              Redefining the experience of luxury real estate in Pahrump through
              dedicated service and three decades of market mastery.
            </p>

            <div className="footer-social-links" aria-label="Social Media Links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
                aria-label="Facebook"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
                aria-label="Instagram"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>

              <a
                href="https://www.yelp.com/search?find_desc=Marci+Metzger+Homes&find_loc=Pahrump%2C+NV"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn social-link-yelp"
                aria-label="Yelp"
              >
                <span aria-hidden="true">y</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#about" className="footer-nav-link">About Marci</a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link">Our Services</a>
              </li>
              <li>
                <a href="#gallery" className="footer-nav-link">Featured Gallery</a>
              </li>
              <li>
                <a href="#contact" className="footer-nav-link">Contact Office</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#services" className="footer-nav-link">Luxury Estates</a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link">Residential Sales</a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link">Investment Land</a>
              </li>
              <li>
                <a href="#contact" className="footer-nav-link">Relocation Services</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & MLS / Equal Housing */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            Copyright &copy; {new Date().getFullYear()} Marci Metzger Homes &bull; The Ridge
            Realty Group. All Rights Reserved.
          </p>

          <div className="footer-compliance-badges">
            <img
              src={equalHousingLogo}
              alt="Equal Housing Opportunity"
              className="compliance-icon"
              title="Equal Housing Opportunity"
            />
            {/* Realtor SVG Badge */}
            <svg
              className="compliance-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-label="Realtor® Member"
              role="img"
            >
              <title>Realtor® Member</title>
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};
