import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, Clock } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Newsletter Banner */}
        <div className="footer-newsletter-banner" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2.5rem', marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ maxWidth: '450px' }}>
            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.25rem' }}>Join Our Community</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Subscribe to get preschool newsletters, admissions circulars, and event announcements.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to R PLAY KIDS updates!'); e.target.reset(); }} style={{ display: 'flex', gap: '0.5rem', flexGrow: 1, maxWidth: '400px' }}>
            <input type="email" placeholder="Your Email Address" required className="newsletter-input" style={{ flexGrow: 1, padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.08)', color: '#fff' }} />
            <button type="submit" className="newsletter-btn" style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-sm)', border: 'none', backgroundColor: 'var(--secondary-blue)', color: '#fff', fontWeight: '700', cursor: 'pointer' }}>Subscribe</button>
          </form>
        </div>

        <div className="grid footer-grid">
          {/* Column 1: School Info */}
          <div className="footer-col footer-about">
            <a href="#/" className="logo-link" style={{ color: '#fff', alignItems: 'center' }}>
              <img src="/assets/logo.jpg" alt="R PLAY KIDS Logo" className="logo-img" style={{ width: '50px', height: '50px', objectFit: 'contain', borderRadius: '4px', background: '#fff', padding: '2px' }} />
              <div className="logo-text" style={{ color: '#fff' }}>
                R PLAY KIDS
                <span className="logo-sub" style={{ color: 'rgba(255,255,255,0.6)' }}>Learn. Play. Grow.</span>
              </div>
            </a>
            <p>
              Dedicated to providing a warm, playful, and safe early childhood environment that nurtures creative expression, social skills, and primary learning.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Youtube">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links-list">
              <li><a href="#/">Home</a></li>
              <li><a href="#/about">About Us</a></li>
              <li><a href="#/academics">Academics</a></li>
              <li><a href="#/admissions">Admissions</a></li>
              <li><a href="#/gallery">School Gallery</a></li>
              <li><a href="#/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Useful Info */}
          <div className="footer-col">
            <h3>Information</h3>
            <ul className="footer-links-list">
              <li><a href="#/about">Principal's Message</a></li>
              <li><a href="#/academics">Montessori &amp; Play Method</a></li>
              <li><a href="#/admissions">Age Criteria</a></li>
              <li><a href="#/gallery">Play Zone Areas</a></li>
              <li><a href="#/contact">Location Map</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="footer-col">
            <h3>Get In Touch</h3>
            <ul className="footer-contact-info">
              <li>
                <MapPin className="footer-contact-icon" />
                <span>123 Knowledge Park, Sector 4, New Delhi - 110001, India</span>
              </li>
              <li>
                <Phone className="footer-contact-icon" />
                <span>+91 11 2345 6789<br />+91 98765 43210</span>
              </li>
              <li>
                <Mail className="footer-contact-icon" />
                <span>info@rplaykids.edu.in<br />admissions@rplaykids.edu.in</span>
              </li>
              <li>
                <Clock className="footer-contact-icon" />
                <span>Mon - Sat: 8:00 AM - 2:00 PM<br />Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} R PLAY KIDS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
