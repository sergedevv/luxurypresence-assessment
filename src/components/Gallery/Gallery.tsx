import React, { useState, useEffect } from 'react';
import { IMAGES, type GalleryItem } from '../../constants/images';
import './Gallery.css';

export const Gallery: React.FC = () => {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = IMAGES.galleryItems;

  const featuredItem = filteredItems[featuredIndex] ?? filteredItems[0];

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
          <span className="gallery-eyebrow">A visual collection</span>
          <h2 className="gallery-title">The Gallery</h2>
        </div>

        <div className="gallery-viewer">
          {featuredItem && (
            <button
              type="button"
              className="gallery-featured"
              onClick={() => openLightbox(featuredItem)}
              aria-label={`Open ${featuredItem.title}`}
            >
              <img
                src={featuredItem.image}
                alt={featuredItem.title}
                className="gallery-featured-img"
              />
              <span className="gallery-featured-count">
                {String(featuredIndex + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
              </span>
            </button>
          )}

          <div className="gallery-thumbnails" role="tablist" aria-label="Gallery photographs">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={index === featuredIndex}
                aria-label={`Show ${item.title}`}
                className={`gallery-thumbnail ${index === featuredIndex ? 'active' : ''}`}
                onClick={() => setFeaturedIndex(index)}
              >
                <img src={item.image} alt="" loading="lazy" />
              </button>
            ))}
          </div>
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
