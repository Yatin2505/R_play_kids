import React, { useState, useEffect } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

function Gallery() {
  const categories = ['All', 'Play Zone', 'Art & Craft', 'Events', 'Classrooms'];

  const images = [
    {
      id: 0,
      src: '/assets/images/hero_school.png',
      category: 'Play Zone',
      title: 'Play School Campus',
      desc: 'Our colorful pre-school building surrounded by safety-padded outdoor play zones.'
    },
    {
      id: 1,
      src: '/assets/images/sports_field.png',
      category: 'Play Zone',
      title: 'Toddler Activity Area',
      desc: 'A safe activity arena featuring slides, small swings, and sensory tunnels.'
    },
    {
      id: 2,
      src: '/assets/images/smart_classroom.png',
      category: 'Classrooms',
      title: 'Activity & Craft Room',
      desc: 'Kids developing fine motor skills with painting, drawing, and blocks.'
    },
    {
      id: 3,
      src: '/assets/images/annual_day.png',
      category: 'Events',
      title: 'Annual Day Drama Play',
      desc: 'Our tiny tots performing a cute cartoon musical in animal costumes.'
    },
    {
      id: 4,
      src: '/assets/images/science_fair.png',
      category: 'Events',
      title: 'Junior Project Expo',
      desc: 'Primary kids explaining their handmade volcano and solar system models.'
    },
    {
      id: 5,
      src: '/assets/images/sports_field.png',
      category: 'Play Zone',
      title: 'Morning Circle Stretching',
      desc: 'Fun coordination games and physical play exercises led by our coach.'
    }
  ];

  const [filter, setFilter] = useState('All');
  const [lightboxActive, setLightboxActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxActive) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxActive, activeIndex]);

  const openLightbox = (id) => {
    // Find the index in the original images array
    const originalIndex = images.findIndex(img => img.id === id);
    setActiveIndex(originalIndex);
    setLightboxActive(true);
  };

  const closeLightbox = () => {
    setLightboxActive(false);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="gallery-page">
      {/* Filter Tabs & Grid */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <h1 className="section-title">School Gallery</h1>
            <p className="section-subtitle">
              Browse through our campus pictures, art creations, and school event celebrations.
            </p>
          </div>

          {/* Categories Tab Selector */}
          <div className="gallery-tabs reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gallery-tab-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid gallery-grid">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                className="gallery-item reveal"
                onClick={() => openLightbox(img.id)}
              >
                <img src={img.src} alt={img.title} />
                <div className="gallery-overlay">
                  <ZoomIn className="gallery-overlay-icon" />
                  <h4>{img.title}</h4>
                  <p>{img.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {lightboxActive && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close Gallery Lightbox">
              <X size={32} />
            </button>
            
            <button className="lightbox-nav-btn lightbox-prev" onClick={prevImage} aria-label="Previous Image">
              <ChevronLeft size={24} />
            </button>

            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].title}
              className="lightbox-img"
            />

            <button className="lightbox-nav-btn lightbox-next" onClick={nextImage} aria-label="Next Image">
              <ChevronRight size={24} />
            </button>

            <div className="lightbox-caption">
              <h3>{images[activeIndex].title}</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.25rem' }}>{images[activeIndex].desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
