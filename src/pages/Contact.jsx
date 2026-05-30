import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required.';
    else if (formData.name.trim().length < 3) tempErrors.name = 'Name must be at least 3 characters.';

    if (!formData.email.trim()) tempErrors.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) tempErrors.email = 'Please enter a valid email.';

    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required.';
    
    if (!formData.message.trim()) tempErrors.message = 'Message content is required.';
    else if (formData.message.trim().length < 10) tempErrors.message = 'Message must be at least 10 characters.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
      // Reset fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Clear success banner after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  return (
    <div className="contact-page">
      {/* Details & Form Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <h1 className="section-title">Contact Us</h1>
            <p className="section-subtitle">
              Have a query? Please fill out the form below or reach out via our direct communication channels.
            </p>
          </div>

          <div className="contact-layout">
            {/* Column 1: Info Cards */}
            <div className="contact-info-column reveal">
              <div className="contact-card">
                <div className="contact-card-icon-box">
                  <MapPin size={24} />
                </div>
                <div className="contact-card-details">
                  <h4>School Location</h4>
                  <p>123 Knowledge Park, Sector 4, New Delhi - 110001, India</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon-box">
                  <Phone size={24} />
                </div>
                <div className="contact-card-details">
                  <h4>Phone Numbers</h4>
                  <p>Admissions: +91 98765 43210</p>
                  <p>Reception: +91 11 2345 6789</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon-box">
                  <Mail size={24} />
                </div>
                <div className="contact-card-details">
                  <h4>Email Addresses</h4>
                  <p>info@rplaykids.edu.in</p>
                  <p>admissions@rplaykids.edu.in</p>
                </div>
              </div>

              <div className="contact-card contact-hours-card">
                <div className="contact-card-icon-box">
                  <Clock size={24} />
                </div>
                <div className="contact-card-details" style={{ width: '100%' }}>
                  <h4>Office Hours</h4>
                  <ul className="contact-hours-list" style={{ marginTop: '0.5rem' }}>
                    <li><span>Monday - Friday</span> <span>8:30 AM - 1:30 PM</span></li>
                    <li><span>Saturday</span> <span>8:30 AM - 12:00 PM</span></li>
                    <li><span>Sunday</span> <span style={{ color: '#dc2626', fontWeight: 600 }}>Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 2: Form */}
            <div className="contact-form-column reveal">
              <div className="form-container" style={{ padding: '2.5rem', width: '100%' }}>
                <h3 className="form-group-title" style={{ marginBottom: '1.5rem' }}>Send Us A Message</h3>
                
                {showSuccess && (
                  <div className="flex align-center" style={{ background: '#ecfdf5', border: '1px solid #10b981', color: '#065f46', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', gap: '0.75rem', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={20} style={{ color: '#10b981', flexShrink: 0 }} />
                    <span>Your message has been sent successfully. Our support desk will reply back shortly!</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="input-field">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <span className="input-error-msg">{errors.name}</span>}
                    </div>
                    <div className="input-field">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="input-error-msg">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                    <div className="input-field">
                      <label htmlFor="subject">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Inquiry regarding Playgroup admissions"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      {errors.subject && <span className="input-error-msg">{errors.subject}</span>}
                    </div>
                  </div>

                  <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                    <div className="input-field">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Describe your inquiry in detail..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && <span className="input-error-msg">{errors.message}</span>}
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                    Send Message <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section-padding" style={{ padding: '0 0 6rem 0' }}>
        <div className="container">
          <div className="map-container reveal">
            <iframe
              title="R PLAY KIDS Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9961623861214!2d77.21665487630263!3d28.629881875667362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd36c507c393%3A0xe10dc538421c608a!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1716912345678!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
