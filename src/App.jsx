import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['about', 'academics', 'admissions', 'admissions-form', 'gallery', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Set up Scroll Animation Intersection Observer whenever page changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));

      return () => {
        revealElements.forEach((el) => observer.unobserve(el));
        observer.disconnect();
      };
    }, 150); // Small timeout to ensure DOM elements have rendered

    return () => clearTimeout(timer);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'academics':
        return <Academics />;
      case 'admissions':
        return <Admissions />;
      case 'admissions-form':
        return <Admissions scrollToForm={true} />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-wrapper" style={{ paddingTop: '80px' }}>
      <Header currentPage={currentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
