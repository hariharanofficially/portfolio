import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-secondary">
            My Journey
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Experience</h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } flex-col md:items-center`}
            >
              <div className="hidden md:block w-1/2" />
              
              {/* Timeline Dot */}
              <div className="absolute left-[16px] md:left-1/2 w-[9px] h-[9px] bg-white rounded-full transform -translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_10px_#fff]" />

              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
              }`}>
                <div className="glass-card p-6 inline-block w-full">
                  <span className="text-sm font-medium text-primary mb-2 block">{exp.period}</span>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                  
                  <ul className={`space-y-2 text-gray-300 ${index % 2 === 0 ? 'md:list-inside' : 'list-inside'} list-disc`}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
