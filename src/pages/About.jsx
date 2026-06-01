import React from 'react';
import { Compass, Eye, Check, Calendar, Award, Star, TrendingUp, GraduationCap } from 'lucide-react';

function About() {
  const stats = [
    { number: '1:10', label: 'Teacher-Student Ratio' },
    { number: '100%', label: 'Safety & Hygiene Standard' },
    { number: '12+', label: 'Daily Creative Activities' },
    { number: '1,500+', label: 'Happy Families' }
  ];

  const faculty = [
    {
      name: 'Mrs. Shalini Sen',
      designation: 'Vice Principal & Head of Montessori Care',
      qual: 'M.A., M.Ed., Early Childhood Specialist',
      exp: '18 Years Experience'
    },
    {
      name: 'Mrs. Priya Gopalan',
      designation: 'Senior Kindergarten Coordinator',
      qual: 'M.Sc. in Child Psychology, B.Ed.',
      exp: '12 Years Experience'
    },
    {
      name: 'Ms. Sunita Rao',
      designation: 'Lead Nursery Instructor',
      qual: 'Diploma in Montessori Pedagogy',
      exp: '11 Years Experience'
    },
    {
      name: 'Mr. Amit Sharma',
      designation: 'Art, Craft & Sensory Play Mentor',
      qual: 'B.Fine Arts, Certified Play Instructor',
      exp: '9 Years Experience'
    },
    {
      name: 'Mrs. Kavita Mehta',
      designation: 'Storytelling & Language Guide',
      qual: 'B.Ed. in English & Child Communication',
      exp: '8 Years Experience'
    },
    {
      name: 'Mr. Rajesh Kumar',
      designation: 'Play & Physical Development Coach',
      qual: 'B.P.Ed., Child Fitness Trainer',
      exp: '15 Years Experience'
    }
  ];

  const timelineEvents = [
    {
      year: '2000',
      title: 'Our Playgroup Foundation',
      description: 'R PLAY KIDS was founded as a small community playgroup with just 20 toddlers in a cozy, sunlit learning room.'
    },
    {
      year: '2007',
      title: 'Primary Wing Introduction',
      description: 'Expanded the classrooms to add Grades I through V, aligning our early education program with standard primary school guidelines.'
    },
    {
      year: '2015',
      title: 'Play Zone & Adventure Expansion',
      description: 'Built our custom indoor adventure house, safety-padded outdoor playgrounds, and designated sand/water sensory play areas.'
    },
    {
      year: '2021',
      title: 'Digital Storyboards & STEM Junior',
      description: 'Digitized storytime sessions with child-friendly interactive screens and introduced basic STEM toys and junior robotics blocks.'
    },
    {
      year: '2025',
      title: 'Silver Jubilee Milestone',
      description: 'Celebrated 25 years of happy parenting support and early childhood care, recognized as the area\'s premier play and primary academy.'
    }
  ];

  return (
    <div className="about-page">
      {/* Principal Message Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <h1 className="section-title">About Our School</h1>
            <p className="section-subtitle">Learn about our values, history, and message from the principal.</p>
          </div>
          <div className="message-container">
            <div className="message-image reveal">
              <img
                src="/assets/images/principal.png"
                alt="Principal Dr. Sunita Deshmukh"
              />
            </div>
            <div className="message-content reveal">
              <h2>Principal's Message</h2>
              <span className="principal-title">Dr. Sunita Deshmukh (Ph.D. in Early Childhood Education, Stanford University)</span>
              <p>
                Dear Parents and Families,
              </p>
              <p>
                At R PLAY KIDS, we believe that early childhood is a golden phase of exploration. Our nursery, playgroup, and primary programs are centered around safety, affection, and active discovery. We believe children learn best when they are encouraged to explore their curiosity.
              </p>
              <p>
                We merge traditional values of sharing and kindness with modern interactive learning. By providing safety-padded play zones, colorful storyrooms, and custom sensory play labs, we ensure that your little ones take their first steps into school with a bright smile and high confidence.
              </p>
              <p>
                I invite you to visit our play campus, meet our caring educators, and join us in raising happy, lifelong explorers.
              </p>
              <div className="principal-signature">
                <h4>Dr. Sunita Deshmukh</h4>
                <p>Principal, R PLAY KIDS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2">
            {/* Mission */}
            <div className="mission-vision-card reveal">
              <Compass className="mv-icon" />
              <h2>Our Mission</h2>
              <p>
                To provide a nurturing, play-based environment where young minds can explore, develop sensory skills, and build strong emotional and social foundations.
              </p>
              <ul>
                <li><Check className="mv-check-icon" size={16} /> Foster creative learning and curiosity.</li>
                <li><Check className="mv-check-icon" size={16} /> Support safe, sensory-based play environments.</li>
                <li><Check className="mv-check-icon" size={16} /> Instill core values of kindness, sharing, and respect.</li>
              </ul>
            </div>

            {/* Vision */}
            <div className="mission-vision-card vision-card reveal">
              <Eye className="mv-icon" />
              <h2>Our Vision</h2>
              <p>
                To be a leading early childhood school that inspires kids to love learning, coordinates closely with parents, and guides happy, self-assured children.
              </p>
              <ul>
                <li><Check className="mv-check-icon" size={16} /> Apply international Montessori &amp; play-way models.</li>
                <li><Check className="mv-check-icon" size={16} /> Maintain the highest child safety &amp; clean campus protocols.</li>
                <li><Check className="mv-check-icon" size={16} /> Support dynamic physical, social, and language skill growth.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* School History Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">Our Growing Journey</h2>
            <p className="section-subtitle">
              Take a walk down memory lane to see how our play center evolved into a beautiful, trusted nursery and primary academy.
            </p>
          </div>

          <div className="timeline">
            {timelineEvents.map((event, idx) => (
              <div
                key={idx}
                className={`timeline-item ${idx % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'} reveal`}
              >
                <div className="timeline-badge"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{event.year}</div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Profiles Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">Our Dedicated Educators</h2>
            <p className="section-subtitle">
              Meet the Indian teachers and leaders who support our students' early academic growth.
            </p>
          </div>

          <div className="grid grid-3">
            {faculty.map((teacher, idx) => (
              <div key={idx} className="faculty-card reveal">
                <div className="faculty-img-box">
                  <div className="faculty-img-placeholder">
                    <GraduationCap size={40} style={{ opacity: 0.7 }} />
                  </div>
                </div>
                <div className="faculty-info">
                  <h3>{teacher.name}</h3>
                  <div className="faculty-designation">{teacher.designation}</div>
                  <p className="faculty-exp" style={{ fontWeight: 600, color: '#475569', marginBottom: '0.25rem' }}>{teacher.qual}</p>
                  <p className="faculty-exp">{teacher.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements / Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="grid grid-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-item reveal">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
