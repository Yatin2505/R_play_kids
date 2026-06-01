import React, { useState } from 'react';
import { BookOpen, Award, Users, ChevronRight, GraduationCap } from 'lucide-react';

function Academics() {
  const wings = [
    {
      title: 'Toddler Playgroup',
      badge: 'Ages 2 - 3 Years',
      curriculum: 'Montessori & Sensory Exploration',
      subjects: 'Sensory-motor exercises, object matching, basic vocabulary, toilet training guidance, nursery rhymes, and social sharing.'
    },
    {
      title: 'Nursery Wing',
      badge: 'Ages 3 - 4 Years',
      curriculum: 'Early Play-Way System',
      subjects: 'Phonics introduction, basic counting, coloring & pasting, fine motor skills, language expressions, and cooperative games.'
    },
    {
      title: 'Kindergarten (LKG/UKG)',
      badge: 'Ages 4 - 6 Years',
      curriculum: 'Foundational CBSE Readiness',
      subjects: 'English reading/writing, basic arithmetic (addition, subtraction), Environmental Studies (EVS), Hindi/Regional language, art, and computer play.'
    },
    {
      title: 'Primary Wing',
      badge: 'Grades I - V',
      curriculum: 'Active Primary Curriculum',
      subjects: 'English literature, Mathematics, Environmental Studies/General Science, Social Studies, Computer Science, Art & Craft, and Physical Play.'
    }
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

  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="academics-page">
      {/* Intro Description */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <h1 className="section-title">Academics &amp; Faculty</h1>
            <p className="section-subtitle">
              Our academic structure is carefully designed to guide kids from toddlers playgroup to active primary learning.
            </p>
          </div>

          <div className="grid grid-2">
            {wings.map((wing, idx) => (
              <div key={idx} className="wing-card reveal">
                <h3>
                  {wing.title}
                  <span className="wing-badge">{wing.badge}</span>
                </h3>
                <div className="wing-curriculum">{wing.curriculum}</div>
                <div className="wing-subjects">
                  <h4>Core Subjects Covered:</h4>
                  <p>{wing.subjects}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Details Tab Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">Curriculum Guidelines</h2>
            <p className="section-subtitle">
              Explore how we design courses, evaluate performances, and integrate extra-curricular interests into the schedules.
            </p>
          </div>

          <div className="curriculum-tabs-container justify-between align-center reveal" style={{ justifyContent: 'center' }}>
            <button
              className={`curriculum-tab-btn ${activeTab === 'courses' ? 'active' : ''}`}
              onClick={() => setActiveTab('courses')}
            >
              Play-Way &amp; Montessori
            </button>
            <button
              className={`curriculum-tab-btn ${activeTab === 'exams' ? 'active' : ''}`}
              onClick={() => setActiveTab('exams')}
            >
              Daily Schedule
            </button>
            <button
              className={`curriculum-tab-btn ${activeTab === 'clubs' ? 'active' : ''}`}
              onClick={() => setActiveTab('clubs')}
            >
              Creative Activities
            </button>
          </div>

          <div className="curriculum-content-panels">
            {/* Panel 1: Courses */}
            <div className={`curriculum-tab-content ${activeTab === 'courses' ? 'active' : ''} reveal`}>
              <div className="curriculum-panel">
                <h3>Montessori Play-Way Pedagogy</h3>
                <p style={{ marginBottom: '1.5rem', color: '#64748b' }}>
                  We implement a child-centric Montessori methodology. We focus on hands-on discovery and motor skill mapping, designed to build self-confidence and natural intellectual exploration.
                </p>
                <ul>
                  <li>Fully integrated sensory tools, blocks, and puzzle maps for visual training.</li>
                  <li>Modern audio-visual story rooms that bring fairy tales and basic vocabulary to life.</li>
                  <li>A completely child-safe environment with soft furniture and play-based class structures.</li>
                  <li>Regular puppet shows and interactive theater to build communication confidence.</li>
                </ul>
              </div>
            </div>

            {/* Panel 2: Exams */}
            <div className={`curriculum-tab-content ${activeTab === 'exams' ? 'active' : ''} reveal`}>
              <div className="curriculum-panel">
                <h3>Balanced Daily Timings</h3>
                <p style={{ marginBottom: '1.5rem', color: '#64748b' }}>
                  A child's day is carefully balanced between active learning, creative play, physical exercise, and rest periods to maintain high energy and prevent fatigue.
                </p>
                <ul>
                  <li><strong>Morning Circle (8:30 - 9:00 AM):</strong> Rhymes, greeting circle, and light stretching.</li>
                  <li><strong>Montessori Time (9:00 - 10:30 AM):</strong> Sensory matching, letters, and puzzle blocks.</li>
                  <li><strong>Snack &amp; Story Time (10:30 - 11:30 AM):</strong> Nutritious meals, storytelling, and conversation.</li>
                  <li><strong>Creative Play (11:30 AM - 1:00 PM):</strong> Arts &amp; crafts, finger painting, sand/water play.</li>
                </ul>
              </div>
            </div>

            {/* Panel 3: Clubs */}
            <div className={`curriculum-tab-content ${activeTab === 'clubs' ? 'active' : ''} reveal`}>
              <div className="curriculum-panel">
                <h3>Creative Junior Clubs</h3>
                <p style={{ marginBottom: '1.5rem', color: '#64748b' }}>
                  Early childhood is the perfect window to discover creative interests. Every child participates in co-curricular clubs.
                </p>
                <ul>
                  <li><strong>Little Painters Club:</strong> Finger painting, clay modeling, and vegetable printing.</li>
                  <li><strong>Junior Orators &amp; Drama:</strong> Puppet roleplaying, recitation, and dressing-up matches.</li>
                  <li><strong>Little Green Thumb (Eco-Club):</strong> Watering plants, flower gardening, and seed planting.</li>
                  <li><strong>Rhythm &amp; Beats:</strong> Keyboard basics, toddler dances, and simple percussion plays.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Profiles */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">Our Expert Educators</h2>
            <p className="section-subtitle">
              Meet the core leadership and teachers who drive the intellectual engine of R PLAY KIDS.
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
    </div>
  );
}

export default Academics;
