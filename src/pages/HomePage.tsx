import { useEffect, useState } from 'react';
import Background from '../Background';
import Navigation from '../Navigation';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';
import { talkToDevs } from '../utils/talkToDevs';

function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    talkToDevs();
    setTimeout(() => setShowContent(true), 1000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'blog', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Background setPortFolioVisible={setShowContent} portFolioVisible={showContent} />
      <div className={`app-content ${showContent ? 'app-content-visible' : ''}`}>
        <Navigation activeSection={activeSection} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </div>
    </>
  );
}

export default HomePage;
