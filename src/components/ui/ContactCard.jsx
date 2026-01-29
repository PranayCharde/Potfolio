const ContactCard = ({ icon, title, content, className = '', style = {} }) => {
  const defaultStyle = {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px var(--shadow)',
    ...style
  };

  return (
    <div className={`contact-card ${className}`.trim()} style={defaultStyle}>
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>{icon}</div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default ContactCard;