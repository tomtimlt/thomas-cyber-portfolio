import { useState } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-cyber-darker min-h-screen text-white overflow-hidden">
      <ParticleBackground />
      
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Scan line effect */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-blue to-transparent scan-line pointer-events-none z-50"></div>
    </div>
  );
}

export default App;
