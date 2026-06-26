import { motion } from 'framer-motion';
import { profileInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-secondary">
            About Me
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold">
            Passionate about <span className="text-gradient">building digital experiences</span>
          </h2>
          
          <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed relative z-10">
              {profileInfo.about}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
