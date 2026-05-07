import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import SpotlightCard from '../components/SpotlightCard';
import { codingProfiles } from '../data/portfolio';
import { Code2, Github, Terminal, Award } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  "LeetCode": <Code2 size={24} />,
  "GitHub": <Github size={24} />,
  "HackerRank": <Terminal size={24} />,
  "CodeChef": <Award size={24} />,
};

export default function CodingProfiles() {
  return (
    <Section id="coding" title="Where I Code" subtitle="Coding Profiles">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {codingProfiles.map((profile, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <SpotlightCard className="h-full">
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 flex flex-col items-center text-center group h-full relative z-20"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors text-white group-hover:text-primary">
                  {icons[profile.platform] || <Code2 size={24} />}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors font-heading">
                  {profile.platform}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {profile.description}
                </p>
                
                <div className="text-sm font-semibold text-primary mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  View Profile &rarr;
                </div>
              </a>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
