import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, Phone } from 'lucide-react';

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message sent! (Demo)");
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 translate-x-32"></div>

      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-xl mb-4 text-slate-800">Get In Touch</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss new opportunities? I'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="heading-lg mb-8 text-slate-800">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-4 bg-primary-50 rounded-xl text-primary-600 mr-6">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">Location</h4>
                  <p className="text-slate-600 text-lg">Nagpur, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-4 bg-primary-50 rounded-xl text-primary-600 mr-6">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">Email</h4>
                  <a href="mailto:pranaycharde13@gmail.com" className="text-slate-600 text-lg hover:text-primary-600 transition-colors">
                    pranaycharde13@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-4 bg-primary-50 rounded-xl text-primary-600 mr-6">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">Phone</h4>
                  <a href="tel:+919766329536" className="text-slate-600 text-lg hover:text-primary-600 transition-colors">
                    +91-9766329536
                  </a>
                </div>
              </div>

               <div className="flex items-start">
                <div className="p-4 bg-primary-50 rounded-xl text-primary-600 mr-6">
                  <Linkedin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/pranaycharde13" target="_blank" rel="noopener noreferrer" className="text-slate-600 text-lg hover:text-primary-600 transition-colors">
                    linkedin.com/in/pranaycharde13
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <h4 className="text-lg font-semibold text-slate-800 mb-4">Follow Me</h4>
               <div className="flex gap-4">
                 <a href="https://github.com/PranayCharde" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                   <Github size={24} />
                 </a>
                 <a href="https://www.linkedin.com/in/pranaycharde13" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                   <Linkedin size={24} />
                 </a>
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100"
          >
            <h3 className="heading-lg mb-6 text-slate-800">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="john@example.com" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="Project Inquiry" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none" placeholder="Tell me about your project..." required></textarea>
              </div>

              <button type="submit" className="w-full btn btn-primary flex justify-center items-center gap-2 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;