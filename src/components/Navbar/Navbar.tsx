import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/marcimetzgerlogosmall.png';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <a href="#" className="navbar-brand" aria-label="Marci Metzger Homes Home">
            <img 
              src={logoImg} 
              alt="Marci Metzger Homes" 
              className="brand-logo" 
            />
          </a>

          <nav aria-label="Main Navigation">
            <ul className="navbar-nav">
              <li>
                <a href="#about" className="nav-link">Meet Marci Metzger</a>
              </li>
              <li>
                <a href="#services" className="nav-link">Services</a>
              </li>
              <li>
                <a href="#gallery" className="nav-link">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="navbar-actions">
            <a href="tel:7025958260" className="btn-header-call">
              Call (702) 595-8260
            </a>

            <button 
              type="button" 
              className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`} 
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#about" className="mobile-nav-link" onClick={closeMenu}>
          Meet Marci Metzger
        </a>
        <a href="#services" className="mobile-nav-link" onClick={closeMenu}>
          Services
        </a>
        <a href="#gallery" className="mobile-nav-link" onClick={closeMenu}>
          Gallery
        </a>
        <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>
          Contact
        </a>
        <a href="tel:7025958260" className="mobile-call-btn" onClick={closeMenu}>
          Call (702) 595-8260
        </a>
      </div>
    </header>
  );
};
