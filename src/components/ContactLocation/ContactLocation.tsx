import React, { useState } from 'react';
import ridgeLogo from '../../assets/ridgerealtyicon.png';
import './ContactLocation.css';

export const ContactLocation: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="contact-location-section" aria-label="Contact and Location Information">
      <div className="container">
        <div className="contact-split-card">
          {/* Left Panel: Contact Form */}
          <div className="contact-form-panel">
            <div className="contact-heading-group">
              <h2 className="contact-title">
                Start Your
                <span className="contact-title-script">Next Chapter</span>
              </h2>
              <p className="contact-subtitle">
                Reach out for a confidential consultation and custom market analysis.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field-group">
                <label htmlFor="form-name" className="form-label">Full Name</label>
                <input
                  id="form-name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="form-input"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="form-email" className="form-label">Email Address</label>
                <input
                  id="form-email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="form-message" className="form-label">How Can We Help?</label>
                <textarea
                  id="form-message"
                  placeholder="How can we help you?"
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {submitted ? (
                <div className="form-success-msg" role="status">
                  Thank you! Your inquiry has been sent to Marci Metzger.
                </div>
              ) : (
                <button type="submit" className="btn-send-inquiry">
                  Send Inquiry
                </button>
              )}
            </form>

            <div className="contact-direct-info">
              <a href="tel:7025958260" className="direct-info-item">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(702) 595-8260</span>
              </a>

              <div className="direct-info-item">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Daily 8:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Stylized Map Card */}
          <div className="contact-map-panel" aria-label="Office Location Map">
            {/* Dark Topographical / Road Map SVG */}
            <svg
              className="map-graphic-svg"
              viewBox="0 0 600 600"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Topographical contour elevation lines */}
              <path
                d="M-50,100 Q150,50 300,120 T650,80"
                fill="none"
                stroke="#c5a059"
                strokeWidth="0.8"
                opacity="0.3"
              />
              <path
                d="M-50,220 Q180,160 320,240 T650,180"
                fill="none"
                stroke="#c5a059"
                strokeWidth="1.2"
                opacity="0.45"
              />
              <path
                d="M-50,340 Q220,280 350,360 T650,300"
                fill="none"
                stroke="#c5a059"
                strokeWidth="0.9"
                opacity="0.35"
              />
              <path
                d="M-50,460 Q120,400 380,480 T650,420"
                fill="none"
                stroke="#c5a059"
                strokeWidth="1.4"
                opacity="0.5"
              />
              <path
                d="M-50,560 Q200,510 400,580 T650,530"
                fill="none"
                stroke="#c5a059"
                strokeWidth="0.8"
                opacity="0.25"
              />

              {/* Major Highway NV-160 and Road Grids */}
              <line
                x1="80"
                y1="0"
                x2="480"
                y2="600"
                stroke="#dfb76c"
                strokeWidth="2.2"
                opacity="0.6"
              />
              <line
                x1="0"
                y1="320"
                x2="600"
                y2="280"
                stroke="#c5a059"
                strokeWidth="1.6"
                opacity="0.4"
              />
              <line
                x1="120"
                y1="500"
                x2="550"
                y2="100"
                stroke="#c5a059"
                strokeWidth="1.2"
                opacity="0.35"
              />
              <circle
                cx="300"
                cy="300"
                r="180"
                fill="none"
                stroke="#c5a059"
                strokeWidth="0.75"
                strokeDasharray="6 6"
                opacity="0.2"
              />
            </svg>

            {/* Glowing Golden Map Pins */}
            <div className="map-marker marker-1" title="Spring Mountain Motor Resort">
              <svg width="28" height="36" viewBox="0 0 24 32" className="marker-pin">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 9 12 20 12 20s12-11 12-20c0-6.63-5.37-12-12-12z"
                  fill="#c5a059"
                />
                <circle cx="12" cy="12" r="4.5" fill="#141518" />
              </svg>
            </div>

            <div className="map-marker marker-2" title="Mountain Falls Luxury Golf Club">
              <svg width="34" height="44" viewBox="0 0 24 32" className="marker-pin">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 9 12 20 12 20s12-11 12-20c0-6.63-5.37-12-12-12z"
                  fill="#dfb76c"
                />
                <circle cx="12" cy="12" r="5" fill="#141518" />
              </svg>
            </div>

            <div className="map-marker marker-3" title="Pahrump Valley Winery">
              <svg width="28" height="36" viewBox="0 0 24 32" className="marker-pin">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 9 12 20 12 20s12-11 12-20c0-6.63-5.37-12-12-12z"
                  fill="#c5a059"
                />
                <circle cx="12" cy="12" r="4.5" fill="#141518" />
              </svg>
            </div>

            <div className="map-marker marker-4" title="Calvada Valley Acres">
              <svg width="28" height="36" viewBox="0 0 24 32" className="marker-pin">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 9 12 20 12 20s12-11 12-20c0-6.63-5.37-12-12-12z"
                  fill="#c5a059"
                />
                <circle cx="12" cy="12" r="4.5" fill="#141518" />
              </svg>
            </div>

            {/* Floating Office Badge Card */}
            <div className="map-office-card">
              <div className="office-card-logo-wrap">
                <img
                  src={ridgeLogo}
                  alt="The Ridge Realty Group"
                  className="office-card-logo"
                />
              </div>

              <h3 className="office-title">The Ridge Realty Group</h3>
              <p className="office-address">
                3245 NV-160, Suite F<br />
                Pahrump, Nevada 89048
              </p>

              <a
                href="https://maps.google.com/?q=The+Ridge+Realty+Group+Pahrump+NV"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-get-directions"
              >
                Get Directions
              </a>
            </div>

            {/* Nevada Brand Watermark */}
            <span className="map-nevada-brand">Nevada</span>
          </div>
        </div>
      </div>
    </section>
  );
};
