const SkillItem = ({ icon, name, className = '', style = {} }) => {
  return (
    <div className={`skill-item ${className}`.trim()} style={style}>
      <div className="skill-icon">{icon}</div>
      <h4>{name}</h4>
    </div>
  );
};

export default SkillItem;