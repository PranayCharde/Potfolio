import ProjectCard from '../../components/ui/ProjectCard';

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform with cart functionality and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks and projects with team collaboration features.',
      technologies: ['React', 'Firebase', 'Material UI']
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with forecasts and interactive maps.',
      technologies: ['JavaScript', 'API Integration', 'CSS3']
    }
  ];

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} className={`fade-in-up`} style={{ transitionDelay: `${index * 0.1}s` }} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;