import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary">
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Let's Work Together</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            
            <form className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-surface/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 text-white placeholder-gray-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-surface/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 text-white placeholder-gray-500 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 bg-surface/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 text-white placeholder-gray-500 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
