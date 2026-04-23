import { useEffect, useRef } from 'react';

function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const cursor = cursorRef.current;
    const ringEl = ringRef.current;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;
      ringEl.style.left = ring.current.x + 'px';
      ringEl.style.top  = ring.current.y + 'px';
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = (e) => {
      const el = e.target;
      if (
        el.tagName === 'A' || el.tagName === 'BUTTON' ||
        el.closest('a') || el.closest('button') ||
        el.classList.contains('interactive')
      ) {
        ringEl.style.width  = '56px';
        ringEl.style.height = '56px';
        ringEl.style.background = 'rgba(255,255,255,0.08)';
        cursor.style.width  = '6px';
        cursor.style.height = '6px';
      }
    };
    const onLeave = () => {
      ringEl.style.width  = '36px';
      ringEl.style.height = '36px';
      ringEl.style.background = 'transparent';
      cursor.style.width  = '10px';
      cursor.style.height = '10px';
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div id="cursor"      ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef}   />
    </>
  );
}

export default CustomCursor;
