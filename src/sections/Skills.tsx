import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-24 relative bg-surface/30">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary">
            Technical Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Skills & Technologies</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="glass-card p-6 flex flex-col items-center text-center space-y-4 group">
                <div className="p-4 rounded-full bg-white/5 text-gray-300 group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 group-hover:border-primary/30 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
