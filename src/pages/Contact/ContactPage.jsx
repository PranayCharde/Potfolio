import { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
import api from '../../api';

function ContactPage() {
  const revealRefs = useRef([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneno: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // 👇 REMOVE API CALL FROM HERE ❌
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );

    revealRefs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  // ✅ API CALL HERE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post('/contact', formData);
      // console.log("Response:", res.data);

      setSubmitted(true);

      setFormData({
        name: '',
        email: '',
        phoneno: '',
        message: ''
      });

      setTimeout(() => setSubmitted(false), 3000);

    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <section id="contact" className="section-pad">

      <div className="contact-grid">

        {/* FORM & HERO */}
        <div className="contact-form-side reveal-up" ref={addRef}>
          <h2 className="contact-hero-text">
            LET'S WORK<br />TOGETHER
          </h2>
          <form onSubmit={handleSubmit}>
            
            <div className="form-field">
              <input
                type="text"
                placeholder="enter your name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-field">
              <input
                type="email"
                placeholder="enter your email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-field">
              <input
                type="number"
                placeholder="enter your number"
                value={formData.phoneno}
                onChange={e => setFormData({ ...formData, phoneno: e.target.value })}
              />
            </div>

            <div className="form-field">
              <textarea
                placeholder="enter your message"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              {submitted ? 'Message Sent ✓' : 'Send Message'}
            </button>

          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="contact-info-section reveal-up" ref={addRef}>
          <h3 className="contact-info-title">Contact Information</h3>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon-box">
                <MapPin size={22} />
              </div>
              <div className="info-text">
                <h3>Location</h3>
                <p>Nagpur, Maharashtra, India</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-box">
                <Mail size={22} />
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <a href="mailto:pranaycharde13@gmail.com">pranaycharde13@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-box">
                <Phone size={22} />
              </div>
              <div className="info-text">
                <h3>Phone</h3>
                <a href="tel:+919766329536">+91-9766329536</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-box">
                <Linkedin size={22} />
              </div>
              <div className="info-text">
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/pranaycharde13" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/pranaycharde13
                </a>
              </div>
            </div>
          </div>

          <div className="follow-me">
            <h4>Follow Me</h4>
            <div className="social-links">
              <a href="https://github.com/pranaycharde" target="_blank" rel="noopener noreferrer" className="social-btn">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/pranaycharde13" target="_blank" rel="noopener noreferrer" className="social-btn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactPage;