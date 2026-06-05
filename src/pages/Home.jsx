import React, { useState, useEffect } from 'react';
import { Users, BookOpen, Trophy, Star, Calendar, ArrowRight, Quote, ChevronLeft, ChevronRight, Shield, Tv, Smile, Monitor, Bus, Award, Play, X } from 'lucide-react';

function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const highlights = [
    {
      icon: <Users size={32} />,
      title: 'Loving Educators',
      description: 'Our highly qualified teachers and certified caregivers are deeply passionate about early childhood development and care.'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Creative Playrooms',
      description: 'Bright, colorful activity classrooms filled with Montessori toys, story books, and interactive learning tools.'
    },
    {
      icon: <Trophy size={32} />,
      title: 'Fun Play Zones',
      description: 'Safe indoor and outdoor play spaces featuring slides, sensory tunnels, soft grass, and swings.'
    },
    {
      icon: <Star size={32} />,
      title: 'Well-Rounded Growth',
      description: 'We focus on healthy emotional development, social skills, physical safety, and basic language/cognitive concepts.'
    }
  ];

  const programs = [
    {
      title: 'Play Group',
      age: '1.5 - 2.5 Years',
      desc: 'Nurturing curiosity through sensory play, coloring, object handling, and interactive group games.',
      img: '/assets/images/sports_field.png',
      color: 'blue'
    },
    {
      title: 'Nursery',
      age: '2.5 - 3.5 Years',
      desc: 'Developing social skills and early vocabulary through interactive storytelling, sharing, and Montessori tools.',
      img: '/assets/images/smart_classroom.png',
      color: 'orange'
    },
    {
      title: 'LKG (Lower KG)',
      age: '3.5 - 4.5 Years',
      desc: 'Introduction to basic letters, counting, environment observation, and cooperative playroom activities.',
      img: '/assets/images/science_fair.png',
      color: 'green'
    },
    {
      title: 'UKG (Upper KG)',
      age: '4.5 - 5.5 Years',
      desc: 'Pre-primary CBSE reading, writing readiness, simple arithmetic, Hindi language, and creative arts.',
      img: '/assets/images/annual_day.png',
      color: 'purple'
    }
  ];

  const facilities = [
    {
      title: 'Smart Classes',
      desc: 'Interactive audio-visual screens and animations that make letters, math, and stories come alive.',
      icon: <Tv size={26} />,
      color: 'blue'
    },
    {
      title: 'CCTV Security',
      desc: '24/7 camera monitoring inside classes and corridors to ensure child protection at all times.',
      icon: <Shield size={26} />,
      color: 'red'
    },
    {
      title: 'Playground',
      desc: 'Safe, rubber-padded playgrounds featuring sensory tunnels, slides, and obstacle fun.',
      icon: <Smile size={26} />,
      color: 'gold'
    },
    {
      title: 'Computer Lab',
      desc: 'Introductory child-friendly touch consoles for cognitive sorting games and basic logic.',
      icon: <Monitor size={26} />,
      color: 'purple'
    },
    {
      title: 'Library',
      desc: 'A gorgeous library room filled with colorful picture story books and soft pillows.',
      icon: <BookOpen size={26} />,
      color: 'green'
    },
    {
      title: 'Transport',
      desc: 'Safe, GPS-enabled buses and vans with speed limit trackers and dedicated attendants.',
      icon: <Bus size={26} />,
      color: 'blue-sky'
    }
  ];

  const newsItems = [
    {
      category: 'Art & Play',
      date: 'May 28, 2026',
      title: 'Kids\' Butterfly Garden Tour',
      description: 'Our kindergarten class had a delightful sensory field trip, exploring the butterfly biosphere and learning about caterpillar lifecycles.',
      img: '/assets/images/science_fair.png'
    },
    {
      category: 'Admissions',
      date: 'May 15, 2026',
      title: 'Playgroup & Primary Admissions Open',
      description: 'Registration forms for toddlers (2+ yrs) and primary classes are now available online. The last date to submit is June 15, 2026.',
      img: '/assets/images/hero_school.png'
    },
    {
      category: 'Activities',
      date: 'May 08, 2026',
      title: 'Annual Kids Fun Play Meet',
      description: 'R PLAY KIDS showed incredible spirit in the soft-obstacle run, balloon pop, and relay matches during our annual sports carnival.',
      img: '/assets/images/sports_field.png'
    }
  ];

  const testimonials = [
    {
      quote: "Choosing R PLAY KIDS for our daughter's preschool was the best decision. The caretakers are incredibly loving, and she has learned so much vocabulary and social skills.",
      author: "Mr. & Mrs. Sharma",
      role: "Parents of Nursery Student",
      initials: "MS"
    },
    {
      quote: "My son looks forward to school every single day! The sensory play sessions, finger painting, and warm teacher support made his transition to Primary Class I an absolute joy.",
      author: "Mrs. Sneha Verma",
      role: "Parent of Grade 1 Student",
      initials: "SV"
    },
    {
      quote: "What stands out most is the school's absolute commitment to safety and cleanliness. The playgrounds are soft-padded, clean, and monitored at all times by caring supervisors.",
      author: "Dr. Anjali Mehta",
      role: "Parent of KG Student",
      initials: "AM"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-grid">
            <div className="hero-text-side reveal" style={{ maxWidth: '650px' }}>
              <span className="pulse-badge">
                <span className="pulse-dot"></span> Admissions Open 2026 - 2027
              </span>
              <h1>Where Little <span style={{ color: 'var(--secondary-blue)' }}>Dreams</span> <br /> Take <span style={{ color: 'var(--accent-gold)' }}>Flight</span></h1>
              <p>
                Welcome to R PLAY KIDS, where we blend learning with play in a warm, secure, and sunlit environment. We support toddlers and primary students as they explore, discover, and grow at their own unique pace.
              </p>
              <div className="hero-actions">
                <a href="#/admissions-form" className="btn btn-primary btn-glow">
                  Apply Online Now <ArrowRight size={18} />
                </a>
                <button onClick={() => setIsVideoOpen(true)} className="btn btn-white btn-glow">
                  Watch Campus Tour
                </button>
              </div>
              <div className="hero-quick-trust">
                <div className="trust-item-mini">✓ CBSE Curriculum</div>
                <div className="trust-item-mini">✓ Montessori Labs</div>
                <div className="trust-item-mini">✓ 100% Safe Campus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Statistics Section */}
      <section className="stats-section-premium">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card reveal">
              <div className="stat-icon-wrapper blue">
                <Users size={26} />
              </div>
              <div className="stat-number-wrapper">
                <h3>500+</h3>
                <p>Students</p>
              </div>
            </div>
            <div className="stat-card reveal">
              <div className="stat-icon-wrapper orange">
                <Award size={26} />
              </div>
              <div className="stat-number-wrapper">
                <h3>25+</h3>
                <p>Teachers</p>
              </div>
            </div>
            <div className="stat-card reveal">
              <div className="stat-icon-wrapper green">
                <Calendar size={26} />
              </div>
              <div className="stat-number-wrapper">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="stat-card reveal">
              <div className="stat-icon-wrapper purple">
                <Star size={26} />
              </div>
              <div className="stat-number-wrapper">
                <h3>98%</h3>
                <p>Parent Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motto / Introduction Section */}
      <section className="motto-section">
        <div className="container">
          <div className="motto-box reveal">
            <div className="motto-title">Our Motto</div>
            <div className="motto-text">
              "Knowledge is the Supreme Light" (Tamaso Ma Jyotirgamaya) — guiding every student from the darkness of ignorance to the illumination of wisdom.
            </div>
          </div>
        </div>
      </section>

      {/* Why Parents Choose Us Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center reveal">
            <span className="premium-subtitle">Nurturing Excellence</span>
            <h2 className="section-title">Why Parents Choose Us</h2>
            <p className="section-subtitle">
              We provide a supportive, high-resource environment designed to give students everything they need to excel.
            </p>
          </div>

          <div className="grid grid-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="highlight-card reveal">
                <div className="highlight-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding programs-section-premium">
        <div className="container">
          <div className="text-center reveal">
            <span className="premium-subtitle">Wings of Learning</span>
            <h2 className="section-title">Our Preschool Programs</h2>
            <p className="section-subtitle">
              Explore our tailored curriculums designed to stimulate growth, creativity, and values in every age group.
            </p>
          </div>
          <div className="grid grid-4 programs-grid">
            {programs.map((prog, idx) => (
              <div key={idx} className={`program-card-premium ${prog.color} reveal`}>
                <div className="program-image-wrapper">
                  <img src={prog.img} alt={prog.title} />
                  <span className="program-age-tag">{prog.age}</span>
                </div>
                <div className="program-details">
                  <h3>{prog.title}</h3>
                  <p>{prog.desc}</p>
                  <a href="#/academics" className="program-link">
                    Explore Curriculum <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding facilities-section-premium">
        <div className="container">
          <div className="text-center reveal">
            <span className="premium-subtitle">Safe &amp; Stimulating</span>
            <h2 className="section-title">Our Premium Facilities</h2>
            <p className="section-subtitle">
              We provide a state-of-the-art infrastructure focused on safe play, interactive learning, and high security.
            </p>
          </div>
          <div className="grid grid-3 facilities-grid">
            {facilities.map((fac, idx) => (
              <div key={idx} className="facility-card-premium reveal">
                <div className={`facility-icon-box-premium ${fac.color}`}>
                  {fac.icon}
                </div>
                <h3>{fac.title}</h3>
                <p>{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Tour Section */}
      <section className="section-padding tour-section-premium">
        <div className="container">
          <div className="text-center reveal">
            <span className="premium-subtitle">Virtual Walkthrough</span>
            <h2 className="section-title">Explore Our Campus Tour</h2>
            <p className="section-subtitle">
              Take a look inside our classrooms, sensory play labs, and secure playgrounds.
            </p>
          </div>
          <div className="tour-preview-wrapper reveal">
            <div className="tour-preview-card" onClick={() => setIsVideoOpen(true)}>
              <img src="/assets/images/sports_field.png" alt="R PLAY KIDS Campus Walkthrough" className="tour-cover-img" />
              <div className="tour-overlay-premium">
                <div className="play-button-pulse">
                  <Play size={28} fill="currentColor" style={{ marginLeft: '4px' }} />
                </div>
                <h3>Click to Play Video Tour</h3>
                <p>Duration: 2 mins • Tour of classrooms, play zones, and labs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Announcements */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center reveal">
            <span className="premium-subtitle">Circulars &amp; Events</span>
            <h2 className="section-title">Latest News &amp; Events</h2>
            <p className="section-subtitle">
              Keep up to date with the latest achievements, circulars, and events happening at R PLAY KIDS.
            </p>
          </div>

          <div className="grid grid-3">
            {newsItems.map((item, idx) => (
              <div key={idx} className="news-card reveal">
                <div className="news-img-box">
                  <span className="news-category" data-category={item.category}>{item.category}</span>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="news-content">
                  <span className="news-date">
                    <Calendar size={14} /> {item.date}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#/gallery" className="news-link">
                    View in Gallery <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process Step-by-Step Section */}
      <section className="section-padding admissions-timeline-section-premium">
        <div className="container">
          <div className="text-center reveal">
            <span className="premium-subtitle">Join Our Family</span>
            <h2 className="section-title">Admission Process</h2>
            <p className="section-subtitle">
              Securing a seat for your little explorer is simple. Just follow these four easy steps.
            </p>
          </div>
          
          <div className="home-timeline reveal">
            <div className="timeline-connector-line"></div>
            <div className="home-timeline-grid">
              <div className="home-timeline-step">
                <div className="step-number-bubble">01</div>
                <h3>Online Form</h3>
                <p>Submit basic child and parent details on our online registration portal.</p>
              </div>
              <div className="home-timeline-step">
                <div className="step-number-bubble">02</div>
                <h3>Parent Meet</h3>
                <p>A friendly interactive session and observation meet with coordinates.</p>
              </div>
              <div className="home-timeline-step">
                <div className="step-number-bubble">03</div>
                <h3>Verification</h3>
                <p>Document verification of age proofs, birth certificate, and records.</p>
              </div>
              <div className="home-timeline-step">
                <div className="step-number-bubble">04</div>
                <h3>Seat Confirm</h3>
                <p>Deposit initial school terms fees to secure the child's registration seat.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center reveal" style={{ marginTop: '3.5rem' }}>
            <a href="#/admissions" className="btn btn-primary btn-glow">
              View Detailed Admission Guide <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding testimonials-section">
        <div className="container">
          <div className="text-center reveal">
            <span className="premium-subtitle">Parent Voices</span>
            <h2 className="section-title">What Our Parents Say</h2>
            <p className="section-subtitle">
              Read feedback from families who have experienced the warmth and quality care of R PLAY KIDS.
            </p>
          </div>

          <div className="testimonials-wrapper reveal" style={{ minHeight: '320px' }}>
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className={`testimonial-slide ${idx === activeSlide ? 'active' : ''}`}
              >
                <div className="rating-stars">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <div className="testimonial-avatar">
                  {item.initials}
                </div>
                <Quote className="quote-icon" style={{ marginBottom: '1rem' }} />
                <p className="testimonial-text">"{item.quote}"</p>
                <div className="testimonial-author">
                  <h4>{item.author}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-dots reveal">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          <div className="slider-controls reveal">
            <button className="slider-btn" onClick={prevSlide} aria-label="Previous Testimonial">
              <ChevronLeft size={20} />
            </button>
            <button className="slider-btn" onClick={nextSlide} aria-label="Next Testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Campus Tour Video Modal Popup */}
      {isVideoOpen && (
        <div className="video-modal-overlay" onClick={() => setIsVideoOpen(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setIsVideoOpen(false)}>
              <X size={20} /> Close Tour
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/zjh2E64fKew?autoplay=1"
              title="Preschool Virtual Tour Video Walkthrough"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
