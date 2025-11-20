import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section" itemScope itemType="https://schema.org/AboutPage">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <article className="about-text" itemProp="mainEntity" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content="Yann Klein" />
            <meta itemProp="jobTitle" content="Software Developer & Bootcamp Manager" />
            <meta itemProp="worksFor" content="Le Wagon Tokyo" />
            <p className="about-intro" itemProp="description">
              I’m a maker who loves building things web apps, VR/AR experiments, or AI models that sometimes behave like enthusiastic toddlers. With 15+ years in software engineering, cloud, and machine learning, I’ve led Le Wagon Tokyo’s bootcamps and helped hundreds of students launch tech careers.
            </p>
            <p itemProp="knowsAbout">
              When I’m not teaching or coding, you’ll find me crafting leather goods, exploring new tech, or riding around discovering new places on wheels.
            </p>
            <p itemProp="knowsAbout">
              Curious? Let’s grab a coffee—or jump on Zoom.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
