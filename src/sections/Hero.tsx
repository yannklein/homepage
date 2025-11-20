import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero-section" itemScope itemType="https://schema.org/Person">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight" itemProp="name">Yann Klein</span>
          </h1>
          <p className="hero-subtitle" itemProp="jobTitle">
            Software Developer & Bootcamp Manager at <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization"><span itemProp="name">Le Wagon Tokyo</span></span>
          </p>
          <p className="hero-description" itemProp="description">
            I build products, explore emerging tech (AI, VR, AR), and help people through coding. I’m a maker at heart, mildly obsessed with leathercraft, and I love long-distance bicycle adventures across countries.
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
