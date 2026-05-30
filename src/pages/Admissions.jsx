import React, { useState } from 'react';
import { ShieldCheck, User, Users, MapPin, Phone, Mail, Award, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

function Admissions() {
  const steps = [
    { num: '01', title: 'Online Registration', desc: 'Fill out and submit the online application form.' },
    { num: '02', title: 'Interactive Meet', desc: 'A friendly student interview & interactive mapping session.' },
    { num: '03', title: 'Document Verification', desc: 'Submit birth certificate, past reports, and photos.' },
    { num: '04', title: 'Confirm Admission', desc: 'Secure the seat by paying the initial term fee.' }
  ];

  const criteria = [
    { grade: 'Toddler Playgroup', age: '2 - 3 Years as of March 31', criteria: 'General interaction, parent-accompanied play session.' },
    { grade: 'Nursery Wing', age: '3 - 4 Years as of March 31', criteria: 'Friendly interactive session, basic shape & color observation.' },
    { grade: 'Kindergarten (LKG/UKG)', age: '4 - 6 Years as of March 31', criteria: 'Interactive play session, basic verbal recognition.' },
    { grade: 'Primary (Class I - V)', age: '6 - 10 Years as of March 31', criteria: 'Review of past play school performance & child reading meet.' }
  ];

  // Multi-step form state
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    classApplied: '',
    gender: '',
    parentName: '',
    phone: '',
    email: '',
    address: '',
    declaration: false
  });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [regId, setRegId] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for that field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep1 = () => {
    const stepErrors = {};
    if (!formData.studentName.trim()) stepErrors.studentName = 'Student name is required.';
    else if (formData.studentName.trim().length < 3) stepErrors.studentName = 'Name must be at least 3 characters.';
    
    if (!formData.dob) stepErrors.dob = 'Date of birth is required.';
    if (!formData.classApplied) stepErrors.classApplied = 'Please select a class.';
    if (!formData.gender) stepErrors.gender = 'Gender selection is required.';

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const validateStep2 = () => {
    const stepErrors = {};
    if (!formData.parentName.trim()) stepErrors.parentName = 'Parent/Guardian name is required.';
    else if (formData.parentName.trim().length < 3) stepErrors.parentName = 'Name must be at least 3 characters.';

    if (!formData.phone.trim()) stepErrors.phone = 'Phone number is required.';
    else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) stepErrors.phone = 'Please enter a valid phone number (10-12 digits).';

    if (!formData.email.trim()) stepErrors.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) stepErrors.email = 'Please enter a valid email address.';

    if (!formData.address.trim()) stepErrors.address = 'Permanent address is required.';

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const validateStep3 = () => {
    const stepErrors = {};
    if (!formData.declaration) stepErrors.declaration = 'You must accept the declaration to submit.';
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (formStep === 1 && validateStep1()) {
      setFormStep(2);
    } else if (formStep === 2 && validateStep2()) {
      setFormStep(3);
    }
  };

  const handleBack = () => {
    setFormStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formStep === 3 && validateStep3()) {
      // Simulate submission success and generate registration ID
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setRegId(`RPK2026-${formData.classApplied.toUpperCase().replace(' ', '')}-${randomNum}`);
      setShowSuccessModal(true);
    }
  };

  const handleResetForm = () => {
    setFormData({
      studentName: '',
      dob: '',
      classApplied: '',
      gender: '',
      parentName: '',
      phone: '',
      email: '',
      address: '',
      declaration: false
    });
    setFormStep(1);
    setShowSuccessModal(false);
  };

  return (
    <div className="admissions-page">
      {/* Process Flow timeline */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <h1 className="section-title">Admissions</h1>
            <p className="section-subtitle">
              We make the transition to R PLAY KIDS seamless and stress-free. Follow these four simple steps.
            </p>
          </div>

          <div className="process-timeline reveal">
            {steps.map((s, idx) => (
              <div key={idx} className="process-step">
                <div className="process-num">{s.num}</div>
                <div className="process-step-content">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Criteria Table */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">Eligibility Criteria</h2>
            <p className="section-subtitle">
              Please review the age criteria and assessment requirements for the respective grade before registering.
            </p>
          </div>

          <div className="table-container reveal">
            <table className="criteria-table">
              <thead>
                <tr>
                  <th>Grade Level</th>
                  <th>Age Requirements</th>
                  <th>Admission Criteria</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((item, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: '700', color: 'var(--primary-blue)' }}>{item.grade}</td>
                    <td>{item.age}</td>
                    <td>{item.criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Form */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">Online Registration Form</h2>
            <p className="section-subtitle">
              Complete the registration fields step-by-step. All submissions will be processed within 3 working days.
            </p>
          </div>

          <div className="form-container reveal">
            {/* Form Steps Indicators */}
            <div className="form-step-indicators">
              <span className={`form-step-dot ${formStep >= 1 ? 'active' : ''} ${formStep > 1 ? 'completed' : ''}`}>
                <User size={16} /> 1. Student Details
              </span>
              <span className={`form-step-dot ${formStep >= 2 ? 'active' : ''} ${formStep > 2 ? 'completed' : ''}`}>
                <Users size={16} /> 2. Parent Details
              </span>
              <span className={`form-step-dot ${formStep >= 3 ? 'active' : ''}`}>
                <ShieldCheck size={16} /> 3. Review & Submit
              </span>
            </div>

            <form onSubmit={handleSubmit}>
              {/* STEP 1: Student Information */}
              {formStep === 1 && (
                <div className="form-group-section">
                  <h3 className="form-group-title">Student Information</h3>
                  <div className="form-row">
                    <div className="input-field">
                      <label htmlFor="studentName">Student Full Name *</label>
                      <input
                        type="text"
                        id="studentName"
                        name="studentName"
                        placeholder="John Doe"
                        value={formData.studentName}
                        onChange={handleChange}
                      />
                      {errors.studentName && <span className="input-error-msg">{errors.studentName}</span>}
                    </div>
                    <div className="input-field">
                      <label htmlFor="dob">Date of Birth *</label>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                      />
                      {errors.dob && <span className="input-error-msg">{errors.dob}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="input-field">
                      <label htmlFor="classApplied">Grade Applied For *</label>
                      <select
                        id="classApplied"
                        name="classApplied"
                        value={formData.classApplied}
                        onChange={handleChange}
                      >
                        <option value="">-- Choose Grade --</option>
                        <option value="Playgroup">Toddler Playgroup</option>
                        <option value="Nursery">Nursery</option>
                        <option value="LKG">LKG</option>
                        <option value="UKG">UKG</option>
                        <option value="Class 1">Class 1</option>
                        <option value="Class 2">Class 2</option>
                        <option value="Class 3">Class 3</option>
                        <option value="Class 4">Class 4</option>
                        <option value="Class 5">Class 5</option>
                      </select>
                      {errors.classApplied && <span className="input-error-msg">{errors.classApplied}</span>}
                    </div>
                    <div className="input-field">
                      <label htmlFor="gender">Gender *</label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="">-- Choose Gender --</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.gender && <span className="input-error-msg">{errors.gender}</span>}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Parent/Guardian Details */}
              {formStep === 2 && (
                <div className="form-group-section">
                  <h3 className="form-group-title">Parent/Guardian Information</h3>
                  <div className="form-row">
                    <div className="input-field">
                      <label htmlFor="parentName">Parent/Guardian Full Name *</label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        placeholder="Sarah Doe"
                        value={formData.parentName}
                        onChange={handleChange}
                      />
                      {errors.parentName && <span className="input-error-msg">{errors.parentName}</span>}
                    </div>
                    <div className="input-field">
                      <label htmlFor="phone">Active Mobile Number *</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && <span className="input-error-msg">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                    <div className="input-field">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="parent@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="input-error-msg">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                    <div className="input-field">
                      <label htmlFor="address">Permanent Residential Address *</label>
                      <textarea
                        id="address"
                        name="address"
                        rows="3"
                        placeholder="Apartment, Street Name, City, Pincode"
                        value={formData.address}
                        onChange={handleChange}
                      ></textarea>
                      {errors.address && <span className="input-error-msg">{errors.address}</span>}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Review and Submit */}
              {formStep === 3 && (
                <div className="form-group-section">
                  <h3 className="form-group-title">Verify Your Information</h3>
                  <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                    <p style={{ marginBottom: '0.5rem' }}><strong>Student Name:</strong> {formData.studentName}</p>
                    <p style={{ marginBottom: '0.5rem' }}><strong>Date of Birth:</strong> {formData.dob}</p>
                    <p style={{ marginBottom: '0.5rem' }}><strong>Grade Applied:</strong> {formData.classApplied}</p>
                    <p style={{ marginBottom: '0.5rem' }}><strong>Gender:</strong> {formData.gender}</p>
                    <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '1rem 0' }} />
                    <p style={{ marginBottom: '0.5rem' }}><strong>Parent/Guardian Name:</strong> {formData.parentName}</p>
                    <p style={{ marginBottom: '0.5rem' }}><strong>Parent Mobile:</strong> {formData.phone}</p>
                    <p style={{ marginBottom: '0.5rem' }}><strong>Parent Email:</strong> {formData.email}</p>
                    <p style={{ marginBottom: '0' }}><strong>Address:</strong> {formData.address}</p>
                  </div>

                  <div className="input-field" style={{ flexDirection: 'row', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <input
                      type="checkbox"
                      id="declaration"
                      name="declaration"
                      checked={formData.declaration}
                      onChange={handleChange}
                      style={{ marginTop: '0.25rem', cursor: 'pointer' }}
                    />
                    <label htmlFor="declaration" style={{ fontWeight: '500', fontSize: '0.85rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
                      I hereby declare that all the information provided above is correct to the best of my knowledge and belief. I agree that any discrepancies found may lead to cancellation of registration.
                    </label>
                  </div>
                  {errors.declaration && <span className="input-error-msg" style={{ display: 'block', marginTop: '0.5rem' }}>{errors.declaration}</span>}
                </div>
              )}

              {/* Form Navigation Controls */}
              <div className="form-actions">
                {formStep > 1 ? (
                  <button type="button" className="btn btn-secondary" onClick={handleBack}>
                    <ArrowLeft size={16} /> Back
                  </button>
                ) : (
                  <div></div> // Spacer
                )}

                {formStep < 3 ? (
                  <button type="button" className="btn btn-primary" onClick={handleNext}>
                    Next Step <ArrowRight size={16} />
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#10b981' }}>
                    Submit Registration
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="success-icon-box">
              <CheckCircle size={44} />
            </div>
            <h2>Registration Successful!</h2>
            <p style={{ color: 'var(--text-muted)', margin: '1rem 0 1.5rem 0' }}>
              Your application receipt has been compiled. Please store the reference number for future communication.
            </p>
            <div style={{ background: 'var(--bg-light)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px dashed var(--border-color)', margin: '1rem 0 2rem 0' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', letterSpacing: '1px' }}>Registration Reference ID</span>
              <strong style={{ fontSize: '1.25rem', color: 'var(--primary-blue)', fontFamily: 'var(--font-headings)' }}>{regId}</strong>
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleResetForm}>
              Done & Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admissions;
