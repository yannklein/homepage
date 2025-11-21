import './Hero.css';

interface HeroProps {
  togglePortFolioVisibility: () => void;
}

const Hero: React.FC<HeroProps> = ({ togglePortFolioVisibility }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero-section" itemScope itemType="https://schema.org/Person" onClick={togglePortFolioVisibility}>
      <div className="hero-content" onClick={event => event.stopPropagation()}>
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight" itemProp="name">Yann Klein</span>
          </h1>
          <p className="hero-subtitle" itemProp="jobTitle">
            Software Developer & Bootcamp Manager
          </p>
          <p className="hero-description" itemProp="description">
            I build products, explore <span className="highlight">emerging tech</span> like AI and XR, and <span className="highlight">help people</span> through coding. I’m a <span className="highlight">maker</span> at heart, from robots to leathercraft, and I love to discover new places on wheels.
          </p>
          <div className="hero-actions">
            <button
              onClick={() => scrollToSection('projects')}
              className="hero-btn primary"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hero-btn secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default Hero;
