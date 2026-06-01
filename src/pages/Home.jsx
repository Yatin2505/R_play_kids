import React, { useState, useEffect } from 'react';
import { Users, BookOpen, Trophy, Star, Calendar, ArrowRight, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

function Home() {
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
      role: "Parents of Nursery Student"
    },
    {
      quote: "My son looks forward to school every single day! The sensory play sessions, finger painting, and warm teacher support made his transition to Primary Class I an absolute joy.",
      author: "Mrs. Sneha Verma",
      role: "Parent of Grade 1 Student"
    },
    {
      quote: "What stands out most is the school's absolute commitment to safety and cleanliness. The playgrounds are soft-padded, clean, and monitored at all times by caring supervisors.",
      author: "Dr. Anjali Mehta",
      role: "Parent of KG Student"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

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
        <img
          src="/assets/images/hero_school.png"
          alt="R PLAY KIDS Campus Building"
          className="hero-bg-img"
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-content reveal">
            <span className="hero-badge">
              <Star size={14} style={{ fill: 'currentColor' }} /> Playgroup &amp; Primary Admissions Open
            </span>
            <h1>Where Little Dreams Take Flight</h1>
            <p>
              Welcome to R PLAY KIDS, where we blend learning with play in a warm, secure, and sunlit environment. We support toddlers and primary students as they explore, discover, and grow at their own unique pace.
            </p>
            <div className="hero-actions">
              <a href="#/admissions-form" className="btn btn-primary">
                Apply Online Now <ArrowRight size={18} />
              </a>
              <a href="#/contact" className="btn btn-white">
                Contact Us
              </a>
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

      {/* Highlights Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">Key School Highlights</h2>
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

      {/* Latest News & Announcements */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">Latest News & Events</h2>
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

      {/* Testimonials Section */}
      <section className="section-padding testimonials-section">
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">What Our Parents Say</h2>
            <p className="section-subtitle">
              Read feedback from families who have experienced the warmth and quality care of R PLAY KIDS.
            </p>
          </div>

          <div className="testimonials-wrapper reveal" style={{ minHeight: '260px' }}>
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className={`testimonial-slide ${idx === activeSlide ? 'active' : ''}`}
              >
                <Quote className="quote-icon" />
                <p className="testimonial-text">"{item.quote}"</p>
                <div className="testimonial-author">
                  <h4>{item.author}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
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
    </div>
  );
}

export default Home;
