import { useEffect, useRef } from 'react';
import expenseImg from '../../assets/projects/expense_tracker.png';
import paisaImg from '../../assets/projects/elite_paisa.png';
import managementImg from '../../assets/projects/elite_management.png';
import ProjectCarousel from '../../components/ui/ProjectCarousel';

function ProjectsPage() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    revealRefs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const addRef = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  const projects = [
    {
      title: 'EXPENSE TRACKER',
      tags: ['React', 'Firebase', 'Tailwind'],
      year: '2024',
      type: 'WEB APP',
      demo: 'https://expense-tracker-seven-virid.vercel.app/',
      image: expenseImg,
      accent: '#22c55e',
    },
    {
      title: 'ELITE PAISA',
      tags: ['React', 'Tailwind', 'Vite'],
      year: '2024',
      type: 'WEB APP',
      demo: 'https://elite-paisa.vercel.app/',
      image: paisaImg,
      accent: '#06b6d4',
    },
    {
      title: 'ELITE MANAGEMENT',
      tags: ['React', 'Tailwind', 'Vite'],
      year: '2024',
      type: 'WEB APP',
      demo: 'https://elite-management-one.vercel.app/',
      image: managementImg,
      accent: '#f59e0b',
    },
    {
      title: 'INJURY RESPONSE SYSTEM',
      tags: ['React', 'Firebase', 'Tailwind'],
      year: '2024',
      type: 'WEB PLATFORM',
      demo: 'https://safeguard-emergencyplatform-uxwz.vercel.app/',
      accent: '#ef4444',
    },
    {
      title: 'ELITE HOTELS',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      year: '2024',
      type: 'FULL STACK',
      demo: 'https://hotel-chi-pied.vercel.app',
      accent: '#14b8a6',
    },
    {
      title: 'PORTFOLIO WEBSITE',
      tags: ['React', 'Tailwind', 'Vite'],
      year: '2025',
      type: 'WEB DESIGN',
      demo: '#',
      github: 'https://github.com/PranayCharde',
      accent: '#818cf8',
    },
  ];

  return (
    <section id="projects" className="section-pad">

      {/* Header */}
      <div className="work-header">
        <h2 className="work-title reveal-up" ref={addRef}>
          FEATURED<br />WORK
        </h2>
        <p className="work-desc reveal-up" ref={addRef} style={{ transitionDelay: '0.15s' }}>
          A selection of projects built with modern web technologies.
          Each one reflects my passion for clean code and user-focused design.
        </p>
      </div>

      {/* Premium Carousel */}
      <div className="reveal-up" ref={addRef} style={{ transitionDelay: '0.25s' }}>
        <ProjectCarousel projects={projects} />
      </div>

      {/* GitHub CTA */}
      <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
        <a
          href="https://github.com/PranayCharde"
          target="_blank"
          rel="noopener noreferrer"
          className="kb-nav-btn"
          style={{ fontSize: '0.85rem' }}
        >
          VIEW MORE ON GITHUB ↗
        </a>
      </div>

    </section>
  );
}

export default ProjectsPage;