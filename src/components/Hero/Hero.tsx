import React, { useEffect, useState } from 'react';
import { IMAGES } from '../../constants/images';
import './Hero.css';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGES.heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero-section" aria-label="Hero Showcase">
      {IMAGES.heroSlides.map((slide, index) => (
        <div
          key={slide.url}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.url})` }}
          role="img"
          aria-label={slide.alt}
        />
      ))}

      <div className="hero-overlay" />

      <div className="container hero-stage">
        <div className="hero-copy">
          <span className="hero-eyebrow">MARCI METZGER - THE RIDGE REALTY GROUP</span>
          <h1 className="hero-title">
            Pahrump Is Home.
            <span className="hero-title-accent">Let&apos;s Find Yours.</span>
          </h1>
          <p className="hero-subtitle">Real estate guidance from someone who knows the community.</p>

          <div className="hero-slide-dots" aria-label="Slideshow Controls">
            {IMAGES.heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
