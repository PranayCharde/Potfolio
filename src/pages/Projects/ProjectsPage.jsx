import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

function ProjectsPage() {
  const projects = [
    {
      title: "Injury Response Automation System",
      description: "A web-based emergency response platform designed to provide quick access to medical information. Features user authentication, secure data storage, and QR code integration for instant profile access during emergencies.",
      image: "linear-gradient(135deg, #ef4444, #b91c1c)", // Placeholder gradient
      tags: ["React", "Firebase Auth", "Firestore", "Tailwind CSS", "JavaScript"],
      links: {
        demo: "#", // Add link if available
        github: "#" // Add link if available
      }
    },
    {
      title: "Elite Hotels",
      description: "A comprehensive hotel management and booking platform. Features include room booking, admin dashboard for management, facilities overview, and secure payment processing. Built with the MERN stack.",
      image: "linear-gradient(135deg, #10b981, #059669)", 
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      links: {
        demo: "https://hotel-chi-pied.vercel.app",
        github: "#" 
      }
    },
    // Add more projects if needed or use placeholders
    {
        title: "Portfolio Website",
        description: "A professional portfolio website built with React and Tailwind CSS to showcase skills and projects. Features smooth animations, responsive design, and glassmorphism effects.",
        image: "linear-gradient(135deg, #2563eb, #3b82f6)",
        tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        links: {
            demo: "#",
            github: "https://github.com/PranayCharde"
        }
    }
  ];

  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-xl mb-4 text-slate-800">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Here are some of the projects I've worked on, utilizing modern technologies to solve real-world problems.
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="h-64 w-full flex items-center justify-center text-white text-4xl font-bold relative overflow-hidden"
                style={{ background: project.image }}
              >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  {/* Overlay content on hover could go here */}
                  <span className="relative z-10 drop-shadow-lg">{project.title[0]}</span>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={project.links.demo} 
                    className="flex items-center text-slate-700 hover:text-primary-600 font-semibold transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <ExternalLink size={18} className="ml-2" />
                  </a>
                  <a 
                    href={project.links.github} 
                    className="flex items-center text-slate-700 hover:text-primary-600 font-semibold transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code <Github size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <a href="https://github.com/PranayCharde" target="_blank" rel="noopener noreferrer" className="btn btn-secondary inline-flex items-center">
                View More on GitHub <ArrowRight className="ml-2 w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;