import React from 'react';
import { IMAGES } from '../../constants/images';
import './Services.css';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  image: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sell',
    title: 'Sell Your Home',
    description:
      'Maximize value with bespoke marketing campaigns that reach the right qualified buyers.',
    linkText: 'Get A Valuation',
    href: '#contact',
    image: IMAGES.serviceSell,
  },
  {
    id: 'buy',
    title: 'Find Your Dream',
    description:
      'Navigate the market with ease, finding the perfect estate that matches your lifestyle.',
    linkText: 'Browse Listings',
    href: '#contact',
    image: IMAGES.serviceDream,
  },
  {
    id: 'commercial',
    title: 'Commercial & Residential',
    description:
      'From expansive ranch lands to turnkey residential, we guide you to smart decisions.',
    linkText: 'Explore Opportunities',
    href: '#contact',
    image: IMAGES.serviceCommercial,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="services-section" aria-label="Our Premier Services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Our Premier Services</h2>
          <p className="services-subtitle">
            From luxury estates to expansive desert retreats, we provide a tailored
            approach to every property adventure.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((service) => (
            <a 
              key={service.id} 
              href={service.href} 
              className="service-card"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="service-card-bg"
                loading="lazy" 
              />
              <div className="service-card-overlay" />
              
              <div className="service-card-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
                <div className="service-card-link">
                  <span>{service.linkText}</span>
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
