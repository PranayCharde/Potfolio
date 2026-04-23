import { useEffect } from 'react';

function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('progress-bar');
    if (!bar) return;
    const onScroll = () => {
      const h = document.body.scrollHeight - window.innerHeight;
      bar.style.width = (window.scrollY / h * 100) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div id="progress-bar" />;
}

export default ScrollProgress;
