import React, { useState, useEffect } from 'react';
import { IMAGES } from '../../constants/images';
import './Hero.css';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Search Listings Form State
  const [location, setLocation] = useState('Any');
  const [type, setType] = useState('Any');
  const [sortBy, setSortBy] = useState('');
  const [bedrooms, setBedrooms] = useState('Any Number');
  const [baths, setBaths] = useState('Any Number');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchFeedback, setSearchFeedback] = useState<string | null>(null);

  const locations = [
  'Any',
  'Alamo',
  'Alton',
  'Amargosa Valley',
  'Beatty',
  'Beryl',
  'Blue Diamond',
  'Boulder City',
  'Brian Head',
  'Cal Nev Ari',
  'Caliente',
  'Cold Creek',
  'Crystal',
  'Duck Creek Village',
  'Dyer',
  'Elko',
  'Ely',
  'Goldfield',
  'Goodsprings',
  'Hatch',
  'Henderson',
  'Indian Springs',
  'Jean',
  'Las Vegas',
  'Laughlin',
  'Logandale',
  'Manhattan',
  'Mc Gill',
  'Mesquite',
  'Moapa',
  'Mount Charleston',
  'Mountain Springs',
  'North Las Vegas',
  'Other',
  'Overton',
  'Pahrump',
  'Palm Gardens',
  'Panaca',
  'Parowan',
  'Pioche',
  'Round Mountain',
  'Sandy Valley',
  'Searchlight',
  'Tonopah',
];

const types = [
  'Any',
  'Single Family',
  'Luxury Estate',
  'Desert Ranch',
  'Commercial',
  'Land / Lots',
];


  // Interval-based hero background changer (every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGES.heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const criteria = [
      location !== 'Any' ? `in ${location}` : '',
      type !== 'Any' ? `${type}` : 'All Types',
      bedrooms !== 'Any Number' ? `${bedrooms} Beds` : '',
      baths !== 'Any Number' ? `${baths} Baths` : '',
      minPrice ? `from $${minPrice}` : '',
      maxPrice ? `up to $${maxPrice}` : '',
    ]
      .filter(Boolean)
      .join(', ');

    setSearchFeedback(`Searching listings: ${criteria || 'All available Pahrump listings'}`);
    setTimeout(() => setSearchFeedback(null), 5000);
  };

  return (
    <section className="hero-section" aria-label="Hero Showcase">
      {/* Background Slides with Interval Crossfade */}
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

      {/* Hero Headline Content */}
      <div className="container hero-content">
        <span className="hero-eyebrow">
          Pahrump&apos;s #1 Residential Sales Expert
        </span>
        <h1 className="hero-title">
          Don&apos;t Just List It...
          <span className="hero-title-accent">Get It SOLD!</span>
        </h1>

        {/* Slide Indicators */}
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

      {/* SEARCH LISTINGS Component */}
      <div className="search-listings-container">
        <div className="search-listings-card">
          <h2 className="search-listings-title">Search Listings</h2>

          <form className="search-listings-form" onSubmit={handleSearch}>
            {/* Row 1: Location, Type, Sort By */}
            <div className="search-row-top">
              <div className="search-field">
                <label htmlFor="search-location" className="search-field-label">
                  Location
                </label>
                <div className="search-select-wrapper">
                  <select
                    id="search-location"
                    className="search-select"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    {locations.map((locationOption) => (
                      <option key={locationOption} value={locationOption}>
                        {locationOption}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="select-arrow-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              <div className="search-field">
                <label htmlFor="search-type" className="search-field-label">
                  Type
                </label>
                <div className="search-select-wrapper">
                  <select
                    id="search-type"
                    className="search-select"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    {types.map((typeOption) => (
                      <option key={typeOption} value={typeOption}>
                        {typeOption}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="select-arrow-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              <div className="search-field">
                <label htmlFor="search-sort" className="search-field-label">
                  Sort By
                </label>
                <div className="search-select-wrapper">
                  <select
                    id="search-sort"
                    className="search-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="">Featured</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="newest">Newest Listings</option>
                    <option value="beds">Bedrooms: Most</option>
                  </select>
                  <svg
                    className="select-arrow-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 2: Bedrooms, Baths, Min Price, Max Price, SEARCH NOW */}
            <div className="search-row-bottom">
              <div className="search-field">
                <label htmlFor="search-beds" className="search-field-label">
                  Bedrooms
                </label>
                <div className="search-select-wrapper">
                  <select
                    id="search-beds"
                    className="search-select"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                  >
                    <option value="Any Number">Any Number</option>
                    <option value="1+">1+</option>
                    <option value="2+">2+</option>
                    <option value="3+">3+</option>
                    <option value="4+">4+</option>
                    <option value="5+">5+</option>
                  </select>
                  <svg
                    className="select-arrow-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              <div className="search-field">
                <label htmlFor="search-baths" className="search-field-label">
                  Baths
                </label>
                <div className="search-select-wrapper">
                  <select
                    id="search-baths"
                    className="search-select"
                    value={baths}
                    onChange={(e) => setBaths(e.target.value)}
                  >
                    <option value="Any Number">Any Number</option>
                    <option value="1+">1+</option>
                    <option value="2+">2+</option>
                    <option value="3+">3+</option>
                    <option value="4+">4+</option>
                  </select>
                  <svg
                    className="select-arrow-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              <div className="search-field">
                <label htmlFor="search-min-price" className="search-field-label">
                  Min Price
                </label>
                <input
                  id="search-min-price"
                  type="text"
                  placeholder=""
                  className="search-input-underline"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </div>

              <div className="search-field">
                <label htmlFor="search-max-price" className="search-field-label">
                  Max Price
                </label>
                <input
                  id="search-max-price"
                  type="text"
                  placeholder=""
                  className="search-input-underline"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>

              <div className="search-field search-btn-field">
                <button type="submit" className="btn-search-now">
                  Search Now
                </button>
              </div>
            </div>

            {searchFeedback && (
              <div className="search-results-feedback" role="status">
                🔍 {searchFeedback}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
