import { useEffect, useRef } from 'react';

function AboutPage() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const addRef = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  const education = [
    { degree: 'B.Tech — Computer Science Engineering', institution: 'G H Raisoni University', year: '2022–2026' },
    { degree: '12th (State Board)', institution: 'Prerna Junior College', year: '2022' },
    { degree: '10th (State Board)', institution: 'Shree Satya Sai Convent', year: '2020' },
  ];

  const certs = [
    'Introduction to HTML5 & CSS — University of Michigan',
    'JavaScript — Meta',
    'Python Programming — University of Michigan',
    'Machine Learning & Android Dev — IIT Bombay',
    'Introduction to Generative AI — Google',
  ];

  return (
    <section id="about" className="section-pad">

      {/* Big bold tagline */}
      <p className="about-tagline reveal-up" ref={addRef}>
        I'M A RESULTS-DRIVEN MERN STACK DEVELOPER BASED IN INDIA.
        MY PASSION FOR CLEAN CODE, SMOOTH INTERACTIONS, AND MODERN
        WEB TECHNOLOGIES DRIVES EVERY PROJECT I BUILD.
      </p>

      {/* Expanded body */}
      <p className="about-body reveal-up" ref={addRef} style={{ transitionDelay: '0.15s' }}>
        Proficient in MongoDB, Express.js, React.js, and Node.js with a strong grasp of RESTful APIs
        and modern UI frameworks. I thrive on turning complex requirements into clean, scalable,
        and maintainable solutions that delight users and move businesses forward.
      </p>

      {/* CTA */}
      <div className="about-cta reveal-up" ref={addRef} style={{ transitionDelay: '0.25s' }}>
        <a
          href="#contact"
          className="about-contact-btn"
          onClick={e => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          CONTACT NOW
        </a>
      </div>

      {/* Detail grid */}
      <div className="about-details-grid reveal-up" ref={addRef} style={{ transitionDelay: '0.35s' }}>
        {/* Education */}
        <div className="about-detail-box">
          <div className="about-detail-label">Education</div>
          {education.map((edu, i) => (
            <div key={i} className="about-detail-item">
              <h4>{edu.degree}</h4>
              <p>{edu.institution} · {edu.year}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="about-detail-box">
          <div className="about-detail-label">Certifications</div>
          {certs.map((c, i) => (
            <div key={i} className="about-detail-item">
              <h4>{c}</h4>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default AboutPage;