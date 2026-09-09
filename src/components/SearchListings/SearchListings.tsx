import React, { useState } from 'react';
import './SearchListings.css';

const locations = [
  'Any', 'Alamo', 'Alton', 'Amargosa Valley', 'Beatty', 'Beryl',
  'Blue Diamond', 'Boulder City', 'Brian Head', 'Cal Nev Ari', 'Caliente',
  'Cold Creek', 'Crystal', 'Duck Creek Village', 'Dyer', 'Elko', 'Ely',
  'Goldfield', 'Goodsprings', 'Hatch', 'Henderson', 'Indian Springs', 'Jean',
  'Las Vegas', 'Laughlin', 'Logandale', 'Manhattan', 'Mc Gill', 'Mesquite',
  'Moapa', 'Mount Charleston', 'Mountain Springs', 'North Las Vegas', 'Other',
  'Overton', 'Pahrump', 'Palm Gardens', 'Panaca', 'Parowan', 'Pioche',
  'Round Mountain', 'Sandy Valley', 'Searchlight', 'Tonopah',
];

const types = ['Any', 'Land', 'Residential Lease Highlands', 'Residential'];

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'price-asc', label: 'Least Expensive to Most' },
  { value: 'price-desc', label: 'Most Expensive to Least' },
  { value: 'beds-asc', label: 'Bedrooms (Low to High)' },
  { value: 'beds-desc', label: 'Bedrooms (High to Low)' },
  { value: 'baths-asc', label: 'Bathrooms (Low to High)' },
  { value: 'baths-desc', label: 'Bathrooms (High to Low)' },
];

const SelectArrow: React.FC = () => (
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
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const SearchListings: React.FC = () => {
  const [location, setLocation] = useState('Any');
  const [type, setType] = useState('Any');
  const [sortBy, setSortBy] = useState('newest');
  const [bedrooms, setBedrooms] = useState('Any Number');
  const [baths, setBaths] = useState('Any Number');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchFeedback, setSearchFeedback] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const criteria = [
      location !== 'Any' ? `in ${location}` : '',
      type !== 'Any' ? type : 'All Types',
      bedrooms !== 'Any Number' ? `${bedrooms} Beds` : '',
      baths !== 'Any Number' ? `${baths} Baths` : '',
      minPrice ? `from $${minPrice}` : '',
      maxPrice ? `up to $${maxPrice}` : '',
    ].filter(Boolean).join(', ');

    setSearchFeedback(`Searching listings: ${criteria || 'All available Pahrump listings'}`);
    setTimeout(() => setSearchFeedback(null), 5000);
  };

  return (
    <section id="search-listings" className="search-listings-section" aria-label="Search Listings">
      <div className="container">
        <div className="search-listings-card">
          <div className="search-listings-heading">
            <h2 className="search-listings-title">Search Listings</h2>
          </div>

          <form className="search-listings-form" onSubmit={handleSearch}>
            <div className="search-row-top">
              <div className="search-field">
                <label htmlFor="search-location" className="search-field-label">Location</label>
                <div className="search-select-wrapper">
                  <select id="search-location" className="search-select" value={location} onChange={(e) => setLocation(e.target.value)}>
                    {locations.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                  <SelectArrow />
                </div>
              </div>

              <div className="search-field">
                <label htmlFor="search-type" className="search-field-label">Property Type</label>
                <div className="search-select-wrapper">
                  <select id="search-type" className="search-select" value={type} onChange={(e) => setType(e.target.value)}>
                    {types.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                  <SelectArrow />
                </div>
              </div>

              <div className="search-field">
                <label htmlFor="search-sort" className="search-field-label">Sort By</label>
                <div className="search-select-wrapper">
                  <select id="search-sort" className="search-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    {sortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </select>
                  <SelectArrow />
                </div>
              </div>
            </div>

            <div className="search-row-bottom">
              <div className="search-field">
                <label htmlFor="search-beds" className="search-field-label">Bedrooms</label>
                <div className="search-select-wrapper">
                  <select id="search-beds" className="search-select" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
                    {['Any Number', 'Studio', '1+', '2+', '3+', '4+', '5+', '6+'].map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                  <SelectArrow />
                </div>
              </div>

              <div className="search-field">
                <label htmlFor="search-baths" className="search-field-label">Baths</label>
                <div className="search-select-wrapper">
                  <select id="search-baths" className="search-select" value={baths} onChange={(e) => setBaths(e.target.value)}>
                    {['Any Number', '1+', '2+', '3+', '4+', '5+', '6+'].map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                  <SelectArrow />
                </div>
              </div>

              <div className="search-field">
                <label htmlFor="search-min-price" className="search-field-label">Min Price</label>
                <input id="search-min-price" type="text" inputMode="numeric" className="search-input-underline" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
              </div>

              <div className="search-field">
                <label htmlFor="search-max-price" className="search-field-label">Max Price</label>
                <input id="search-max-price" type="text" inputMode="numeric" className="search-input-underline" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
              </div>

              <div className="search-field search-btn-field">
                <button type="submit" className="btn-search-now">Search Now</button>
              </div>
            </div>

            {searchFeedback && <div className="search-results-feedback" role="status">{searchFeedback}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};
