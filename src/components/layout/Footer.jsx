import { Github, Linkedin, Mail, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400 mb-4 inline-block">
              Pranay Charde
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm mb-6">
              MERN Stack Developer creating amazing digital experiences through clean, efficient code and innovative design solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/PranayCharde" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg text-slate-300 hover:bg-primary-600 hover:text-white transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pranaycharde13" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg text-slate-300 hover:bg-primary-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:pranaycharde13@gmail.com" className="p-2 bg-slate-800 rounded-lg text-slate-300 hover:bg-primary-600 hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-slate-100">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-primary-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-slate-400 hover:text-primary-400 transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services/Tags */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-slate-100">Expertise</h4>
             <div className="flex flex-wrap gap-2">
               {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'Framer Motion', 'UI/UX'].map((tag) => (
                 <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-400 text-sm rounded-full">
                   {tag}
                 </span>
               ))}
             </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Pranay Charde. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Made with <Heart size={16} className="mx-1 text-red-500 fill-current" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;