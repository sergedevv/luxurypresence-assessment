import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { StatsRibbon } from './components/StatsRibbon/StatsRibbon';
import { SearchListings } from './components/SearchListings/SearchListings';
import { PartnerLogos } from './components/PartnerLogos/PartnerLogos';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { GetItSold } from './components/GetItSold/GetItSold';
import { Gallery } from './components/Gallery/Gallery';
import { ContactLocation } from './components/ContactLocation/ContactLocation';
import { Footer } from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.main-content > section:not(#home):not(.stats-ribbon)');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px' }
    );

    sections.forEach((section) => {
      section.classList.add('scroll-reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="main-content">
        <Hero />
        <StatsRibbon />
        <About />
        <GetItSold />
        <SearchListings />
        <PartnerLogos />
        <Services />
        <Gallery />
        <ContactLocation />
      </main>
      <Footer />
    </div>
  );
};

export default App;
