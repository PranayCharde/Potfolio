import { useEffect, useRef } from 'react';

function SkillsPage() {
  const stackRefs = useRef([]);

  useEffect(() => {
    // Stagger animation for stack items
    const items = document.querySelectorAll('.stack-item');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            e.target.style.transition =
              `opacity 0.6s ease ${parseFloat(e.target.dataset.delay || 0)}s,
               transform 0.6s cubic-bezier(0.16,1,0.3,1) ${parseFloat(e.target.dataset.delay || 0)}s`;
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const stack = [
    {
      icon: '⚛️',
      name: 'REACT.JS',
      cat: 'FRONTEND FRAMEWORK',
      desc: 'Component-based UI library for building fast, interactive user interfaces with a declarative approach.',
      percent: '90%',
    },
    {
      icon: '🟢',
      name: 'NODE.JS + EXPRESS',
      cat: 'BACKEND RUNTIME',
      desc: 'Server-side JavaScript runtime paired with Express for building scalable RESTful APIs and microservices.',
      percent: '85%',
    },
    {
      icon: '🍃',
      name: 'MONGODB',
      cat: 'DATABASE',
      desc: 'NoSQL document database used for flexible, scalable data storage with Mongoose ODM integration.',
      percent: '80%',
    },
    {
      icon: '🎨',
      name: 'TAILWIND CSS',
      cat: 'STYLING',
      desc: 'Utility-first CSS framework enabling rapid, consistent, and responsive UI development.',
      percent: '92%',
    },
    {
      icon: '🔥',
      name: 'FIREBASE',
      cat: 'BACKEND AS A SERVICE',
      desc: 'Google\'s BaaS platform — used for Auth, Firestore, Storage, and real-time data across projects.',
      percent: '78%',
    },
    {
      icon: '🐍',
      name: 'PYTHON',
      cat: 'PROGRAMMING LANGUAGE',
      desc: 'Used for scripting, ML experiments, and automation — particularly with data processing tasks.',
      percent: '70%',
    },
    {
      icon: '🎭',
      name: 'FIGMA',
      cat: 'DESIGN TOOL',
      desc: 'Collaborative design and prototyping tool used for UI mockups and design systems.',
      percent: '75%',
    },
    {
      icon: '🚀',
      name: 'GIT + GITHUB',
      cat: 'VERSION CONTROL',
      desc: 'Version control and collaboration platform — branching, PRs, CI/CD with Vercel & Netlify.',
      percent: '88%',
    },
  ];

  const marqueeItems = [
    'REACT.JS', 'NODE.JS', 'MONGODB', 'EXPRESS.JS',
    'TAILWIND CSS', 'FIREBASE', 'PYTHON', 'FIGMA',
    'REST APIs', 'GIT', 'VERCEL', 'JavaScript',
  ];

  return (
    <>
      {/* ─── MARQUEE STRIP ─── */}
      <div id="marquee-section">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              <span className="marquee-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ─── STACK SECTION ─── */}
      <section id="skills" className="section-pad">
        <div className="stack-grid">
          <h2 className="stack-title mt-15 p-10">
            MY<br />TECH<br />STACK
          </h2>

          <div className="stack-list">
            {stack.map((item, i) => (
              <div
                key={i}
                className="stack-item"
                data-delay={i * 0.07}
              >
                <div className="stack-icon">{item.icon}</div>
                <div className="stack-info">
                  <div className="stack-name">{item.name}</div>
                  <div className="stack-cat">{item.cat}</div>
                  <div className="stack-desc">{item.desc}</div>
                </div>
                <div className="stack-percent">{item.percent}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsPage;