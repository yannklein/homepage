import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Background from '../Background';
import Navigation from '../Navigation';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';
import { talkToDevs } from '../utils/talkToDevs';

// Survives route changes but not a full reload, so the intro plays once per visit
let homeVisited = false;

function HomePage() {
  const { key, hash } = useLocation();
  // Skip the intro if it already played (e.g. browser back from a blog post), or
  // if we arrived through an in-app link: the router only gives the first page
  // load the "default" key
  const [skipIntro] = useState(homeVisited || key !== 'default');

  useEffect(() => {
    homeVisited = true;
  }, []);
  const [activeSection, setActiveSection] = useState('home');
  const [showContent, setShowContent] = useState(skipIntro);

  useEffect(() => {
    talkToDevs();
    // setTimeout(() => setShowContent(true), 1000);
  }, []);

  // Land on the section we came back to (e.g. "Back to Blog" links to /#blog)
  useEffect(() => {
    if (skipIntro && hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [skipIntro, hash]);

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

  const togglePortFolioVisibility = () => {
    setShowContent((state: boolean) => !state)
  }

  return (
    <>
      <Background setPortFolioVisible={setShowContent} portFolioVisible={showContent} skipIntro={skipIntro} />
      <div className={`app-content ${showContent ? 'app-content-visible' : ''}`}>
        <Navigation activeSection={activeSection} />
        <Hero togglePortFolioVisibility={togglePortFolioVisibility}/>
        <About togglePortFolioVisibility={togglePortFolioVisibility}/>
        <Skills togglePortFolioVisibility={togglePortFolioVisibility}/>
        <Projects togglePortFolioVisibility={togglePortFolioVisibility}/>
        <Blog togglePortFolioVisibility={togglePortFolioVisibility}/>
        <Contact togglePortFolioVisibility={togglePortFolioVisibility}/>
      </div>
    </>
  );
}

export default HomePage;
