import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import CodingProfiles from './sections/CodingProfiles';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="relative">
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <CodingProfiles />
        <Projects />
        <Contact />
      </main>

      <footer className="glass py-12 border-t border-white/5 mt-24 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
          <a 
            href="mailto:muralidharanrajmohan@gmail.com" 
            className="text-gray-400 hover:text-primary transition-colors text-lg font-medium"
          >
            muralidharanrajmohan@gmail.com
          </a>
          <p className="text-gray-500 font-medium text-sm">
            © {new Date().getFullYear()} Murali Dharan | AI & Full Stack Developer
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
