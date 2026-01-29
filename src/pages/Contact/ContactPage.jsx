import ContactCard from '../../components/ui/ContactCard';

function ContactPage() {
  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
            <ContactCard icon="📍" title="Location" content="Bangalore, India" className="fade-in-up" />
            <ContactCard icon="✉️" title="Email" content="pranav@example.com" className="fade-in-up" style={{ transitionDelay: '0.1s' }}/>
            <ContactCard icon="📞" title="Phone" content="+91 98765 43210" className="fade-in-up" style={{ transitionDelay: '0.2s' }}/>
          </div>
          
          <div className="contact-form fade-in-up" style={{ transitionDelay: '0.3s' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Send me a message</h3>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
          
          <div className="social-links fade-in-up" style={{ marginTop: '3rem', transitionDelay: '0.4s' }}>
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">🐦</a>
            <a href="#" className="social-link">💼</a>
            <a href="#" className="social-link">🐙</a>
            <a href="#" className="social-link">📷</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;