// Utility functions for scroll animations
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements that should animate on scroll
  document.querySelectorAll('.section, .card, .section-title, .fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el);
  });

  return observer;
};

// Animation classes to add to elements
export const animationClasses = {
  fadeUp: 'fade-in-up',
  fadeLeft: 'fade-in-left',
  fadeRight: 'fade-in-right',
  section: 'section',
  card: 'card',
  title: 'section-title'
};