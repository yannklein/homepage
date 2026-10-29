import './About.css';

interface AboutProps {
  togglePortFolioVisibility: () => void;
}

const About: React.FC<AboutProps> = ({ togglePortFolioVisibility }) => {
  return (
    <section id="about" className="section about-section" itemScope itemType="https://schema.org/AboutPage" onClick={togglePortFolioVisibility}>
      <div className="section-container" onClick={event => event.stopPropagation()}>
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <article className="about-text" itemProp="mainEntity" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content="Yann Klein" />
            <meta itemProp="jobTitle" content="Senior Software Engineer | AI & Data Science Engineer and Educator" />
            <meta itemProp="worksFor" content="Le Wagon, matinno.co, Code for People & Magic" />
            <meta itemProp="homeLocation" content="Barcelona, Spain" />
            <p className="about-intro" itemProp="description">
              I'm a maker who loves building things, web apps, VR/AR experiments, or AI models that sometimes behave like enthusiastic toddlers. With 15+ years in software engineering, cloud, and machine learning, I've led <a href="https://www.lewagon.com/blog/meet-our-team-yann" target="_blank" rel="noopener noreferrer">Le Wagon Tokyo's bootcamps</a> and helped hundreds of students launch tech careers.
            </p>
            <p itemProp="knowsAbout">
              After more than ten years in Japan, I now live in Barcelona. I build product as a software engineer at <a href="https://matinno.co/" target="_blank" rel="noopener noreferrer">matinno.co</a>, teach web development and AI with Le Wagon, and run Code for People & Magic, my freelance studio at the intersection of AI automation, full-stack development, and positive impact.
            </p>
            <p itemProp="knowsAbout">
              When I'm not teaching or coding, you'll find me pointing an antenna at the sky to <a href="https://satellite.yannklein.dev" target="_blank" rel="noopener noreferrer">catch pictures from weather satellites</a>, <a href="https://medium.com/@yann.and.the.machines/yann-and-the-machines-50540e9ec088" target="_blank" rel="noopener noreferrer">crafting leather goods</a>, or riding around discovering new places on wheels.
            </p>
            <p itemProp="knowsAbout">
              These days I split my coding between <a href="https://github.com/yannklein" target="_blank" rel="noopener noreferrer">GitHub</a> and <a href="https://gitlab.com/yannklein" target="_blank" rel="noopener noreferrer">GitLab</a>, keeping both platforms equally green with contributions.
            </p>
            <p style={{ textAlign: 'center', margin: '2rem 0' }}>
              <img src="https://raw.githubusercontent.com/yannklein/multi-platform-contrib-counter/refs/heads/main/public/contrib.svg" alt="Contribution graph" style={{ width: '100%', maxWidth: '800px' }} />
            </p>
            <p itemProp="knowsAbout">
              Curious? Let's grab a coffee, or <a href="https://cal.com/yannklein/30min?user=yannklein" target="_blank" rel="noopener noreferrer">jump on Zoom</a>.
            </p>
          </article>
          <div className="about-profile-container">
            <a
              href="https://www.linkedin.com/in/yann-klein/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-profile-link"
            >
              <img
                src="https://res.cloudinary.com/yanninthesky/image/upload/yannklein.me/yann.png"
                alt="Yann Klein"
                className="about-profile-image"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/yann-klein/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-badge"
            >
              <i className="fab fa-linkedin"></i>
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
