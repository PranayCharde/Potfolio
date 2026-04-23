import { useState, useEffect } from 'react';
import resumeFile from '../../assets/Pranay_Charde_Resume_ATS.docx';

function Navbar() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const navLinks = [
    { id: 'home',     num: '', label: 'HOME'     },
    { id: 'about',    num: '', label: 'ABOUT'    },
    { id: 'projects', num: '', label: 'WORK'     },
    { id: 'skills',   num: '', label: 'SKILLS'   },
    { id: 'contact',  num: '', label: 'CONTACT'  },
  ];

  // Lock scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = overlayOpen ? 'hidden' : '';
  }, [overlayOpen]);

  const scrollTo = (id) => {
    setOverlayOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  return (
    <>
      {/* ─── MAIN NAV ─── */}
      <nav className="kb-nav">
        <a href="#home" className="kb-nav-logo" onClick={e => { e.preventDefault(); scrollTo('home'); }}>
          PC®
        </a>

        {/* Dot-grid menu trigger */}
        <button
          className="kb-nav-dots"
          onClick={() => setOverlayOpen(true)}
          aria-label="Open navigation menu"
        >
          <span className="kb-dot" />
          <span className="kb-dot" />
          <span className="kb-dot" />
          <span className="kb-dot" />
        </button>

        {/* Resume / Contact CTA */}
        <a
          href={resumeFile}
          target="_blank"
          rel="noopener noreferrer"
          className="kb-nav-btn"
        >
          RESUME ↗
        </a>
      </nav>

      {/* ─── OVERLAY MENU ─── */}
      <div id="nav-overlay" className={overlayOpen ? 'open' : ''}>
        {/* Overlay top bar */}
        <div className="overlay-nav-top">
          <span className="kb-nav-logo">PC®</span>
          <button className="overlay-close" onClick={() => setOverlayOpen(false)} aria-label="Close menu">
            ✕
          </button>
          <a
            href="#contact"
            className="kb-nav-btn"
            onClick={e => { e.preventDefault(); scrollTo('contact'); }}
          >
            CONTACT NOW
          </a>
        </div>

        {/* Big nav links */}
        <nav className="overlay-links">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="overlay-link"
              onClick={e => { e.preventDefault(); scrollTo(link.id); }}
            >
              <span className="link-num">{link.num}</span>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Overlay footer */}
        <div className="overlay-footer">
          <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
          <div className="overlay-socials">
            <a href="https://github.com/PranayCharde" target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
            <a href="https://www.linkedin.com/in/pranaycharde13" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
            <a href="mailto:pranaycharde13@gmail.com">EMAIL ↗</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;