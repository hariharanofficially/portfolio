import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profileInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary">
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {profileInfo.headline.split(' ').slice(0, 2).join(' ')}{' '}
            <span className="text-gradient block">{profileInfo.headline.split(' ').slice(2).join(' ')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-lg">
            {profileInfo.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              View Projects <ArrowRight size={18} />
            </a>
            <a 
              href={profileInfo.resume} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 glass-card rounded-full font-medium hover:bg-white/5 transition-all text-white"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>

          <div className="flex gap-4 pt-8">
            <a href={profileInfo.github} className="p-3 glass-card rounded-full text-gray-300 hover:text-white hover:-translate-y-1 transition-all">
              <FaGithub size={20} />
            </a>
            <a href={profileInfo.linkedin} className="p-3 glass-card rounded-full text-gray-300 hover:text-white hover:-translate-y-1 transition-all">
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${profileInfo.email}`} className="p-3 glass-card rounded-full text-gray-300 hover:text-white hover:-translate-y-1 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="w-full aspect-square max-w-md mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl transform rotate-3" />
            <div className="absolute inset-0 glass-card rounded-3xl transform -rotate-3 overflow-hidden flex items-center justify-center border-2 border-white/10">
              {/* Developer Illustration / Avatar Placeholder */}
              <div className="w-48 h-48 bg-white/5 rounded-full flex items-center justify-center">
                 <span className="text-6xl border-b-4 border-primary pb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">
                    {'< />'}
                 </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
