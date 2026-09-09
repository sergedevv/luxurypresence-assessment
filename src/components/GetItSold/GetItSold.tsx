import React from 'react';
import { IMAGES } from '../../constants/images';
import './GetItSold.css';

const stories = [
  { audience: 'For sellers', title: 'Top Residential Sales Last 5 Years', description: 'We helped nearly 90 clients in 2021, and closed 28.5 million in sales. Our team works hard every day to grow and learn, so we can continue to excel in our market.', link: 'Meet the team', image: IMAGES.getItSold.topResidentialSales },
  { audience: 'For homeowners', title: "Don't Just List It...", description: 'Get it SOLD! We exhaust every avenue to ensure your listing reaches the right buyer and achieves its strongest possible result.', link: 'Sell with confidence', image: IMAGES.getItSold.dontJustListIt },
  { audience: 'For buyers', title: 'Guide to Buyers', description: 'Nobody knows the market like we do. Enjoy having a pro at your service, from market analysis and upgrades to contractors and financing guidance.', link: 'Start your search', image: IMAGES.getItSold.guideToBuyers },
];

export const GetItSold: React.FC = () => (
  <section className="get-it-sold-section" aria-labelledby="get-it-sold-title">
    <div className="container">
      <header className="get-it-sold-header">
        <span className="get-it-sold-eyebrow">Experience the difference</span>
        <h2 id="get-it-sold-title">Get It Sold</h2>
        <p>Choose the path that fits where you are now. We will help with what comes next.</p>
      </header>
      <div className="get-it-sold-list">
        {stories.map((story, index) => (
          <article className={`sold-story ${index % 2 ? 'sold-story-reverse' : ''}`} key={story.title}>
            <div className="sold-story-image-wrap"><img src={story.image} alt="" className="sold-story-image" loading="lazy" /></div>
            <div className="sold-story-copy">
              <span className="sold-story-number">0{index + 1}</span>
              <span className="sold-story-audience">{story.audience}</span>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <a href="#contact" className="sold-story-link">
                {story.link}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
