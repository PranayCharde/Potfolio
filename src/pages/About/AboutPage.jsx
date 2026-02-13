import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award } from 'lucide-react';

function AboutPage() {
  const education = [
    {
      degree: "Bachelor of Technology - BTech",
      institution: "G H Raisoni University",
      field: "Computer Science Engineering",
      year: "2022-2026"
    },
    {
      degree: "12th (State board)",
      institution: "Prerna Junior College",
      year: "2022"
    },
    {
      degree: "10th (State board)",
      institution: "Shree Satya Sai Convent",
      year: "2020"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-xl mb-4 text-slate-800">About Me</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 glass p-8 rounded-2xl shadow-xl border border-slate-100 bg-white/50">
               <h3 className="heading-lg mb-6 text-primary-700">Summary</h3>
               <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                 Results-driven MERN Stack Web Developer with hands-on experience in building, optimizing, and deploying dynamic web applications. 
                 Proficient in MongoDB, Express.js, React.js, and Node.js, with a strong grasp of RESTful APIs and modern UI frameworks.
               </p>
               <p className="text-slate-600 leading-relaxed text-lg">
                 Adept at translating business requirements into technical solutions and delivering clean, scalable, and maintainable code. 
                 Passionate about continuous learning, teamwork, and creating seamless user experiences.
               </p>
            </div>
            {/* Decorative element */}
            <div className="absolute top-[-20px] left-[-20px] w-full h-full border-2 border-primary-200 rounded-2xl -z-10"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-primary-600 mr-4" />
              <h3 className="heading-md">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary-100 hover:border-primary-500 transition-colors duration-300">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-primary-500"></div>
                  <h4 className="text-xl font-bold text-slate-800">{edu.degree}</h4>
                  <p className="text-primary-600 font-medium mb-1">{edu.institution}</p>
                  {edu.field && <p className="text-slate-500 mb-1">{edu.field}</p>}
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
            
             <div className="mt-10">
               <div className="flex items-center mb-6">
                 <Award className="w-8 h-8 text-accent-500 mr-4" />
                 <h3 className="heading-md">Certifications</h3>
               </div>
               <ul className="space-y-3 text-slate-600 list-disc list-inside">
                 <li>Introduction to HTML5 & CSS by University of Michigan</li>
                 <li>Javascript by Meta</li>
                 <li>Python Programming (Getting Started) by University of Michigan</li>
                 <li>Machine Learning & Android Development by Techfest, IIT Bombay and AWS</li>
                 <li>Introduction to Generative AI by Google</li>
               </ul>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;