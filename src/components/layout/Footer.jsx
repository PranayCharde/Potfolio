function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="kb-footer">
      <p>© {new Date().getFullYear()} PRANAY CHARDE</p>

      <div className="kb-footer-socials">
        <a href="https://github.com/PranayCharde" target="_blank" rel="noopener noreferrer">
          GITHUB ↗
        </a>
        <a href="https://www.linkedin.com/in/pranaycharde13" target="_blank" rel="noopener noreferrer">
          LINKEDIN ↗
        </a>
        <a href="mailto:pranaycharde13@gmail.com">
          EMAIL ↗
        </a>
      </div>

      <button className="kb-footer-back" onClick={scrollTop}>
        GO BACK TO TOP ↑
      </button>
    </footer>
  );
}

export default Footer;