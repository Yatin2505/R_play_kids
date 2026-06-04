import React, { useState, useEffect } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Camera, Upload, AlertCircle } from 'lucide-react';

const defaultVisitorSnaps = [
  {
    id: 'v_0',
    src: '/assets/images/science_fair.png',
    category: 'Visitor Snaps',
    title: 'Happy Campus Visit',
    desc: 'Uploaded by Parent Rahul: Had a wonderful time watching the tiny tots play during our weekend visit!'
  }
];

function Gallery() {
  const categories = ['All', 'Play Zone', 'Art & Craft', 'Events', 'Classrooms', 'Visitor Snaps'];

  const baseImages = [
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

  const [visitorImages, setVisitorImages] = useState([]);
  const [filter, setFilter] = useState('All');
  const [lightboxActive, setLightboxActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Upload Form State
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [uploadTitle, setUploadTitle] = useState('');
  const [visitorMessage, setVisitorMessage] = useState('');
  const [uploadFile, setUploadFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('visitor_snaps');
    if (saved) {
      try {
        setVisitorImages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse visitor snaps", e);
        setVisitorImages(defaultVisitorSnaps);
      }
    } else {
      localStorage.setItem('visitor_snaps', JSON.stringify(defaultVisitorSnaps));
      setVisitorImages(defaultVisitorSnaps);
    }
  }, []);

  const allImages = [...baseImages, ...visitorImages];

  const filteredImages = filter === 'All' 
    ? allImages 
    : allImages.filter(img => img.category === filter);

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
  }, [lightboxActive, activeIndex, allImages.length]);

  const openLightbox = (id) => {
    const idx = allImages.findIndex(img => img.id === id);
    if (idx !== -1) {
      setActiveIndex(idx);
      setLightboxActive(true);
    }
  };

  const closeLightbox = () => {
    setLightboxActive(false);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  // Handle File Selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check size limit: 2MB
    if (file.size > 2 * 1024 * 1024) {
      setFileError("Image must be smaller than 2MB. Please choose a smaller picture.");
      setUploadFile(null);
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadFile(reader.result);
      setFileError('');
    };
    reader.onerror = () => {
      setFileError("Failed to read file. Please try another image.");
    };
    reader.readAsDataURL(file);
  };

  // Handle Snap Submission
  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!uploadTitle.trim() || !visitorName.trim() || !uploadFile) {
      setFileError("Please fill out all required fields and select an image.");
      return;
    }

    const newSnap = {
      id: `v_${Date.now()}`,
      src: uploadFile,
      category: 'Visitor Snaps',
      title: uploadTitle,
      desc: `Uploaded by Visitor ${visitorName}: ${visitorMessage.trim() || 'Had a lovely visit to R PLAY KIDS!'}`
    };

    const updatedSnaps = [newSnap, ...visitorImages];
    setVisitorImages(updatedSnaps);
    localStorage.setItem('visitor_snaps', JSON.stringify(updatedSnaps));

    // Clear form fields
    setVisitorName('');
    setUploadTitle('');
    setVisitorMessage('');
    setUploadFile(null);
    setUploadSuccess(true);
    setFileError('');

    // Automatically navigate to show the uploaded snaps
    setFilter('Visitor Snaps');

    setTimeout(() => {
      setUploadSuccess(false);
      setShowUploadForm(false);
    }, 2500);
  };

  return (
    <div className="gallery-page">
      {/* Filter Tabs & Grid */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
            <h1 className="section-title">School Gallery</h1>
            <p className="section-subtitle">
              Browse through our campus pictures, art creations, and school event celebrations.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <button 
                className="btn btn-primary"
                onClick={() => setShowUploadForm(!showUploadForm)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: 'var(--shadow-md)' }}
              >
                <Camera size={18} />
                {showUploadForm ? "Hide Upload Form" : "Upload Your Snaps"}
              </button>
            </div>
          </div>

          {/* Upload Form Panel */}
          {showUploadForm && (
            <div className="upload-panel reveal" style={{ marginBottom: '4rem' }}>
              <form onSubmit={handleUploadSubmit} className="upload-form">
                <h3>Share Your Play School Memories</h3>
                <p className="upload-description">Upload snaps you captured at our playhouse or events to share with the community.</p>
                
                {uploadSuccess && (
                  <div className="upload-alert alert-success">
                    🎉 Snap uploaded successfully! Viewing "Visitor Snaps" category.
                  </div>
                )}
                
                {fileError && (
                  <div className="upload-alert alert-danger">
                    <AlertCircle size={18} />
                    <span>{fileError}</span>
                  </div>
                )}

                <div className="upload-fields">
                  <div className="form-row">
                    <div className="input-field">
                      <label htmlFor="visitorName">Your Name *</label>
                      <input
                        type="text"
                        id="visitorName"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        required
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="uploadTitle">Snap Title *</label>
                      <input
                        type="text"
                        id="uploadTitle"
                        value={uploadTitle}
                        onChange={(e) => setUploadTitle(e.target.value)}
                        placeholder="e.g. Sand playground fun"
                        required
                      />
                    </div>
                  </div>

                  <div className="input-field">
                    <label htmlFor="visitorMessage">Short Description / Memory</label>
                    <textarea
                      id="visitorMessage"
                      value={visitorMessage}
                      onChange={(e) => setVisitorMessage(e.target.value)}
                      placeholder="e.g. Kids had an absolute blast at the obstacle zone today..."
                      rows={3}
                    />
                  </div>

                  <div className="input-field">
                    <label>Choose Image File * <span style={{ fontWeight: 'normal', color: 'var(--text-muted)', fontSize: '0.8rem' }}>(Max 2MB)</span></label>
                    <div className="file-dropzone-wrapper">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        id="snapFileInput"
                        style={{ display: 'none' }}
                        required={!uploadFile}
                      />
                      <label htmlFor="snapFileInput" className="file-dropzone-label">
                        {uploadFile ? (
                          <div className="file-preview-box">
                            <img src={uploadFile} alt="Preview" className="image-file-preview" />
                            <div className="file-change-overlay">
                              <Upload size={20} />
                              <span>Change Photo</span>
                            </div>
                          </div>
                        ) : (
                          <div className="file-upload-prompt">
                            <Upload size={32} className="upload-prompt-icon" />
                            <p>Click here to browse and select a photo</p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="upload-form-buttons">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => {
                      setShowUploadForm(false);
                      setFileError('');
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Post My Snap
                  </button>
                </div>
              </form>
            </div>
          )}

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
            {filteredImages.length > 0 ? (
              filteredImages.map((img) => (
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
              ))
            ) : (
              <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>No snaps found in this category.</p>
                <p style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>Be the first visitor to upload a snap!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {lightboxActive && allImages[activeIndex] && (
        <div className="lightbox-overlay-glass" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close Gallery Lightbox">
              <X size={32} />
            </button>
            
            <button className="lightbox-nav-btn lightbox-prev" onClick={prevImage} aria-label="Previous Image">
              <ChevronLeft size={24} />
            </button>

            <img
              src={allImages[activeIndex].src}
              alt={allImages[activeIndex].title}
              className="lightbox-img"
            />

            <button className="lightbox-nav-btn lightbox-next" onClick={nextImage} aria-label="Next Image">
              <ChevronRight size={24} />
            </button>

            <div className="lightbox-caption">
              <h3>{allImages[activeIndex].title}</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.25rem' }}>{allImages[activeIndex].desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
