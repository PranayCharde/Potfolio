const ProjectCard = ({ project, className = '', style = {} }) => {
  return (
    <div className={`card project-card ${className}`.trim()} style={style}>
      <div className="project-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
        {project.id === 1 && '🛒'}
        {project.id === 2 && '📋'}
        {project.id === 3 && '🌤️'}
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tag" style={{ display: 'inline-block', marginRight: '0.5rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '4px', fontSize: '0.8rem' }}>
              {tech}
            </span>
          ))}
        </div>
        <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', gap: '1rem' }}>
          <a href="#" className="btn btn-outline" style={{ flex: 1, textAlign: 'center', padding: '0.5rem' }}>View Demo</a>
          <a href="#" className="btn btn-primary" style={{ flex: 1, textAlign: 'center', padding: '0.5rem' }}>Source Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;