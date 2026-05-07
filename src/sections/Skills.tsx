import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { skills } from '../data/portfolio';

export default function Skills() {
  // Duplicate skills to ensure seamless infinite scrolling
  const marqueeSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <Section id="skills" title="Technical Skills" subtitle="My Expertise">
      <div className="relative w-full overflow-hidden py-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-black before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-black after:to-transparent after:content-['']">
        
        <div className="animate-marquee flex whitespace-nowrap space-x-8 w-max hover:[animation-play-state:paused]">
          {marqueeSkills.map((skill, index) => (
            <div 
              key={index}
              className="glass px-8 py-6 rounded-2xl flex items-center gap-4 group hover:border-primary/50 transition-colors cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary font-bold text-2xl font-heading group-hover:bg-primary/20 transition-colors">
                {skill.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white font-heading">{skill.name}</span>
                <span className="text-xs text-primary font-medium tracking-wider uppercase mt-1">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="mt-20 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8 text-white font-heading">Core Proficiency</h3>
        <div className="space-y-6 text-left">
          {skills.slice(0,4).map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                <span className="text-sm font-bold text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden border border-white/5">
                <motion.div 
                  className="bg-gradient-to-r from-primary to-accent h-full rounded-full relative"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <div className="absolute right-0 top-0 h-full w-4 bg-white/50 blur-[2px]" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
