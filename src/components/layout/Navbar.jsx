import useMobileMenu from '../../hooks/useMobileMenu';
import './Navbar.css';
import { useEffect, useState } from 'react';

function Navbar() {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo">Portfolio</a>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="nav-link" onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span>{isOpen ? '✕' : '☰'}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;