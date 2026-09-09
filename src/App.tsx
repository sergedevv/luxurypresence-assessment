import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { StatsRibbon } from './components/StatsRibbon/StatsRibbon';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Gallery } from './components/Gallery/Gallery';
import { ContactLocation } from './components/ContactLocation/ContactLocation';
import { Footer } from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="main-content">
        <Hero />
        <StatsRibbon />
        <About />
        <Services />
        <Gallery />
        <ContactLocation />
      </main>
      <Footer />
    </div>
  );
};

export default App;
