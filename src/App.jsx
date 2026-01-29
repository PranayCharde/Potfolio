import { useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import SkillsPage from './pages/Skills/SkillsPage';
import ContactPage from './pages/Contact/ContactPage';
import { initScrollAnimations } from './utils/scrollAnimations';

function App() {
  useEffect(() => {
    // Initialize scroll animations when component mounts
    const observer = initScrollAnimations();
    
    return () => {
      // Clean up observer when component unmounts
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <SkillsPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App