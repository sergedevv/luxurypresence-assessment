import React from 'react';
import ridgeLogo from '../../assets/ridgerealtyicon.png';
import equalHousingLogo from '../../assets/equalhousingicon.png';
import realtorLogo from '../../assets/realtor.jpeg';
import pahrumpValleyLogo from '../../assets/pahrumpvalley.jpeg';
import './PartnerLogos.css';

export const PartnerLogos: React.FC = () => (
  <section className="partner-logos-section" aria-label="Professional affiliations">
    <div className="container">
      <div className="partner-logos-grid">
        <div className="partner-logo partner-logo-ridge">
          <img src={ridgeLogo} alt="The Ridge Realty Group" />
        </div>
        <div className="partner-logo partner-logo-housing">
          <img src={equalHousingLogo} alt="Equal Housing Opportunity" />
        </div>
        <div className="partner-logo partner-logo-realtor" aria-label="REALTOR member">
          <img src={realtorLogo} alt="REALTOR member" />
        </div>
        <div className="partner-logo partner-logo-chamber" aria-label="Pahrump Valley Chamber of Commerce">
          <img src={pahrumpValleyLogo} alt="Pahrump Valley Chamber of Commerce" />
        </div>
      </div>
    </div>
  </section>
);
