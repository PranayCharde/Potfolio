import { useEffect, useRef } from 'react';
import bgimage from '../../assets/LinkedIn Banner.png';

function PhotoSection() {
  const photoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!photoRef.current) return;
      const scrolled = window.scrollY;
      const rect = photoRef.current.parentElement.getBoundingClientRect();
      const offsetTop = rect.top + scrolled;
      const diff = scrolled - offsetTop;
      
      // Subtle parallax without scaling to ensure full visibility
      photoRef.current.style.transform = `translateY(${diff * 0.1}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="photo-section" 
      style={{ 
        width: '100%',
        height: 'auto',
        overflow: 'hidden', 
        position: 'relative', 
        background: '#000',
        lineHeight: 0
      }}
    >
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <img 
          ref={photoRef}
          src={bgimage} 
          alt="LinkedIn Banner"
          style={{ 
            width: '100%', 
            height: 'auto', 
            display: 'block',
            transform: 'translateY(0)',
            willChange: 'transform',
            zIndex: 1
          }} 
        />
      </div>
      <div 
        className="photo-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%)'
        }}
      />
    </section>
  );
}

export default PhotoSection;
