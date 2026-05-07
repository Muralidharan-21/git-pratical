import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { personalInfo } from '../data/portfolio';
import { User, MapPin, Mail, Briefcase } from 'lucide-react';

export default function About() {
  const highlightWords = (text: string) => {
    const keywords = ["Java Full Stack Developer", "Problem Solver", "Java, Spring Boot, MySQL", "Data Structures & Algorithms"];
    let result = text;
    keywords.forEach(kw => {
      result = result.replace(kw, `<span class="text-white font-semibold">${kw}</span>`);
    });
    return result;
  };

  return (
    <Section id="about" title="Who I Am" subtitle="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8">
          <p 
            className="text-gray-400 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: highlightWords(personalInfo.aboutText) }}
          />
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <User size={20}/>, label: "Name", value: personalInfo.name },
              { icon: <Briefcase size={20}/>, label: "Role", value: "AI & Full Stack Developer" },
              { icon: <MapPin size={20}/>, label: "Location", value: personalInfo.location },
              { icon: <Mail size={20}/>, label: "Email", value: personalInfo.email, isEmail: true },
            ].map((info, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="glass p-4 rounded-2xl flex items-center gap-4"
              >
                <div className="p-3 bg-white/5 rounded-xl text-primary flex-shrink-0">
                  {info.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</p>
                  {info.isEmail ? (
                    <a href={`mailto:${info.value}`} className="text-sm text-gray-200 font-medium hover:text-primary transition-colors break-all">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-200 font-medium truncate">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl -z-10 rounded-full" />
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="w-72 h-72 md:w-96 md:h-96 glass rounded-full flex flex-col items-center justify-center border-4 border-white/5 relative overflow-hidden group shadow-[0_0_50px_rgba(59,130,246,0.1)] hover:shadow-[0_0_80px_rgba(168,85,247,0.2)] transition-shadow duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
            <h2 className="text-7xl font-bold text-white/10 group-hover:text-white/20 transition-colors z-0 absolute font-heading">MD</h2>
            <div className="z-20 text-center">
              <p className="text-3xl font-bold text-white mb-2 font-heading">{personalInfo.experience}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {personalInfo.availability}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </Section>
  );
}
