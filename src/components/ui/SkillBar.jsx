const SkillBar = ({ name, percentage }) => {
  return (
    <div className="skill-bar" style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div style={{ height: '10px', backgroundColor: 'var(--border)', borderRadius: '5px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${percentage}%`, backgroundColor: 'var(--primary)' }}></div>
      </div>
    </div>
  );
};

export default SkillBar;