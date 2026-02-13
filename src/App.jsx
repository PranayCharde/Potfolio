import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import SkillsPage from './pages/Skills/SkillsPage';
import ContactPage from './pages/Contact/ContactPage';

function App() {


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