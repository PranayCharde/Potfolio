import { motion } from 'framer-motion';
import { Code2, Server, Database, Layout, PenTool, Wrench, Terminal, Cloud } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills, delay }) => (
  <motion.div 
    className="card h-full hover:shadow-lg hover:border-primary-200"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex items-center mb-4">
      <div className="p-3 bg-primary-50 rounded-lg text-primary-600 mr-4">
        <Icon size={24} />
      </div>
      <h3 className="font-bold text-xl text-slate-800">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span 
          key={idx} 
          className="px-3 py-1 bg-slate-50 text-slate-700 rounded-md text-sm font-medium border border-slate-100 hover:bg-primary-50 hover:text-primary-700 hover:border-primary-200 transition-colors duration-200 cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

function SkillsPage() {
  const categories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Responsive Design", "UI/UX Design"]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express.js", "Authentication (JWT, OAuth)", "RESTful APIs", "Error Handling"]
    },
    {
      title: "Database Management",
      icon: Database,
      skills: ["MongoDB", "Mongoose", "CRUD Operations", "Firebase Integration"]
    },
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["JavaScript", "Python", "C", "C++"]
    },
    {
      title: "DevOps & Deployment",
      icon: Cloud,
      skills: ["Git", "GitHub", "Vercel", "Netlify"]
    },
    {
      title: "Design & Creative Tools",
      icon: PenTool,
      skills: ["Figma", "Canva", "Adobe Photoshop", "Blender"]
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      skills: ["Postman", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-xl mb-4 text-slate-800">My Skills</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise and the tools I use to bring digital ideas to life.
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <SkillCategory 
              key={index} 
              {...category} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;