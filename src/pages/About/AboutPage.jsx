function AboutPage() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image fade-in-left">
            <div className="placeholder-avatar" style={{ width: '300px', height: '300px', backgroundColor: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '3rem', boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)' }}>
              P
            </div>
          </div>
          <div className="about-text fade-in-right">
            <h3>Hello! I'm Pranav</h3>
            <p>I'm a passionate web developer with expertise in creating modern, responsive websites and applications. With a strong foundation in both frontend and backend technologies, I bring ideas to life through clean, efficient code.</p>
            <p>My journey in web development began several years ago, and I've since worked on diverse projects ranging from small business websites to complex web applications. I love staying up-to-date with the latest industry trends and technologies to deliver cutting-edge solutions.</p>
            <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and tutorials.</p>
            <div className="about-stats" style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>5+</div>
                <div style={{ color: 'var(--text-light)' }}>Years Experience</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>50+</div>
                <div style={{ color: 'var(--text-light)' }}>Projects Completed</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>20+</div>
                <div style={{ color: 'var(--text-light)' }}>Happy Clients</div>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;