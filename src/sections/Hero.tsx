import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Yann Klein</span>
          </h1>
          <p className="hero-subtitle">
            Software Developer & Bootcamp Manager at Le Wagon Tokyo
          </p>
          <p className="hero-description">
            I build modern web applications and empower aspiring developers to transform their careers through code.
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
