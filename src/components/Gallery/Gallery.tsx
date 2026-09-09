import React, { useState, useEffect } from 'react';
import { IMAGES, type GalleryItem } from '../../constants/images';
import './Gallery.css';

type FilterCategory = 'all' | 'estates' | 'ranches' | 'interiors';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = IMAGES.galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = () => {
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((prev) => ((prev ?? 0) + 1) % filteredItems.length);
  };

  const showPrev = () => {
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((prev) =>
      ((prev ?? 0) - 1 + filteredItems.length) % filteredItems.length
    );
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredItems.length) % filteredItems.length
            : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const currentItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="gallery-section" aria-label="Photo Gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="gallery-eyebrow">Exclusive Portfolio</span>
          <h2 className="gallery-title">Featured Property Gallery</h2>
          <p className="gallery-subtitle">
            Explore an exclusive collection of luxury desert estates, custom
            ranches, and architectural interiors represented by Marci Metzger.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="gallery-filters" role="tablist" aria-label="Gallery Categories">
          <button
            type="button"
            className={`gallery-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Properties
          </button>
          <button
            type="button"
            className={`gallery-filter-btn ${activeCategory === 'estates' ? 'active' : ''}`}
            onClick={() => setActiveCategory('estates')}
          >
            Luxury Estates
          </button>
          <button
            type="button"
            className={`gallery-filter-btn ${activeCategory === 'ranches' ? 'active' : ''}`}
            onClick={() => setActiveCategory('ranches')}
          >
            Desert Ranches
          </button>
          <button
            type="button"
            className={`gallery-filter-btn ${activeCategory === 'interiors' ? 'active' : ''}`}
            onClick={() => setActiveCategory('interiors')}
          >
            Interiors
          </button>
        </div>

        {/* Photo Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => openLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') openLightbox(item);
              }}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="gallery-card-img"
                loading="lazy"
              />
              <div className="gallery-card-overlay">
                <h3 className="gallery-card-title">{item.title}</h3>
                <p className="gallery-card-location">{item.location}</p>
                <span className="gallery-card-action">View photograph</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className="lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Property Image Lightbox"
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {filteredItems.length > 1 && (
              <>
                <button
                  type="button"
                  className="lightbox-nav-btn lightbox-nav-prev"
                  onClick={showPrev}
                  aria-label="Previous Image"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="lightbox-nav-btn lightbox-nav-next"
                  onClick={showNext}
                  aria-label="Next Image"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}

            <div className="lightbox-image-wrap">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="lightbox-img"
              />
            </div>

            <div className="lightbox-details">
              <div>
                <h3 className="lightbox-title">{currentItem.title}</h3>
                <p className="lightbox-meta">
                  {currentItem.location} &bull; {currentItem.details}
                </p>
              </div>
              <div className="lightbox-price">{currentItem.categoryLabel}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
