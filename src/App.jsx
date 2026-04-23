import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import SkillsPage from './pages/Skills/SkillsPage';
import ContactPage from './pages/Contact/ContactPage';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import PhotoSection from './components/ui/PhotoSection';

function App() {
  return (
    <>
      <div className="noise-overlay" />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10 w-full flex flex-col">
        <HomePage />
        <PhotoSection />
        <ProjectsPage />
        <AboutPage />
        <SkillsPage />
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}

export default App;