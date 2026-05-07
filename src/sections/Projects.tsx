import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import SpotlightCard from '../components/SpotlightCard';
import { projects } from '../data/portfolio';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="My Work">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <SpotlightCard className="h-full flex flex-col">
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl">
                    <ArrowUpRight size={24} className="text-primary group-hover:rotate-45 transition-transform" />
                  </div>
                  <div className="flex gap-3 relative z-20">
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    {project.live !== "#" && (
                      <a 
                        href={project.live} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors font-heading">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
