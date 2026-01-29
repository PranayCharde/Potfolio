function HeroSection() {
  return (
    <section id="home" className="hero section fade-in-up">
      <div className="hero-content">
        <h1 className="fade-in-up">Hi, I'm Pranav</h1>
        <p className="fade-in-up" style={{transitionDelay: '0.2s'}}>A passionate web developer creating amazing digital experiences</p>
        <div className="hero-buttons fade-in-up" style={{transitionDelay: '0.4s'}}>
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;