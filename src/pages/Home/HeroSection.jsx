import { useEffect } from 'react';
import resumeFile from '../../assets/Pranay_Charde_Resume_ATS.docx';

function HeroSection() {
  useEffect(() => {
    // Reveal animation handled by CSS keyframes on .hero-name-inner
  }, []);

  return (
    <section id="home">
      <div className="hero-spacer" />

      <div className="hero-center">
        {/* Available badge */}
        <div
          className="hero-available"
          style={{ opacity: 0, animation: 'fadeIn 0.6s 0.8s ease forwards' }}
        >
          <div className="hero-available-dot" />
          AVAILABLE FOR HIRE
        </div>

        {/* Giant name */}
        <h1 className="hero-name">
          <span className="hero-name-line">
            <span className="hero-name-inner">PRANAY</span>
          </span>
          <span className="hero-name-line">
            <span className="hero-name-inner">CHARDE</span>
          </span>
        </h1>

        <p className="hero-role">MERN Stack Developer</p>
      </div>

      {/* Bottom bar */}
      <div
        className="hero-bottom"
        style={{ opacity: 0, animation: 'fadeIn 0.6s 1s ease forwards' }}
      >
        <span>BASED IN NAGPUR, MAHARASHTRA</span>
        <a
          href={resumeFile}
          target="_blank"
          rel="noopener noreferrer"
          className="kb-nav-btn"
          style={{ cursor: 'none' }}
        >
          DOWNLOAD RESUME ↗
        </a>
        <span>WEB &amp; APP DEVELOPER</span>
      </div>
    </section>
  );
}

export default HeroSection;