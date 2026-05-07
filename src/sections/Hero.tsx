import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import Section from '../components/Section';
import { ArrowRight, Download, Github, Linkedin, Code2 } from 'lucide-react';

export default function Hero() {
  const roles = ["AI & Full Stack Developer.", "Java + Spring Boot Backend.", "Data Structures Expert.", "Machine Learning Explorer."];
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentRole === currentFullRole) {
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }

      if (isDeleting && currentRole === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      setCurrentRole(prev => 
        isDeleting 
          ? prev.slice(0, -1) 
          : currentFullRole.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex, roles]);

  return (
    <Section id="home" className="pt-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="flex flex-col items-center justify-center text-center h-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium text-gray-300"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {personalInfo.availability} • {personalInfo.location}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 mb-4 font-medium tracking-wide"
        >
          Hi, I'm
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight font-heading"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-12 md:h-16 mb-6"
        >
          <span className="text-2xl md:text-4xl font-semibold text-gradient font-heading">
            {currentRole}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a 
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
          >
            <span>View Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white rounded-full font-medium hover:bg-white/10 transition-all w-full sm:w-auto hover:border-white/30"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center gap-6"
        >
          {[
            { icon: <Github size={24} />, href: personalInfo.socials.github },
            { icon: <Linkedin size={24} />, href: personalInfo.socials.linkedin },
            { icon: <Code2 size={24} />, href: personalInfo.socials.leetcode },
          ].map((social, i) => (
            <a 
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all"
              aria-label="Social Link"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
