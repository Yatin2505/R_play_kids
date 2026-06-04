import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';

function Header({ currentPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#/' },
    { name: 'About Us', path: '#/about' },
    { name: 'Academics', path: '#/academics' },
    { name: 'Admissions', path: '#/admissions' },
    { name: 'Gallery', path: '#/gallery' },
    { name: 'Contact Us', path: '#/contact' },
  ];

  const isActive = (path) => {
    const pathName = path.replace('#/', '').replace('#', '');
    if (pathName === '' && currentPage === 'home') return true;
    return currentPage === pathName;
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <a href="#/" className="logo-link">
            <img src="/assets/logo.jpg" alt="R PLAY KIDS Logo" className="logo-img" style={{ width: '56px', height: '56px', objectFit: 'contain', borderRadius: '4px' }} />
            <div className="logo-text">
              R PLAY KIDS
              <span className="logo-sub">Learn. Play. Grow.</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#/admissions-form" className="btn btn-primary btn-glow" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
              Apply Now
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-list">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a
          href="#/admissions-form"
          className="btn btn-primary"
          style={{ width: '100%', textAlign: 'center' }}
          onClick={handleLinkClick}
        >
          Apply Online
        </a>
      </div>
    </>
  );
}

export default Header;
