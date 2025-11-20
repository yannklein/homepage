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
              I'm a software developer and bootcamp manager at Le Wagon Tokyo, where I help aspiring developers transform their careers through intensive coding education. I combine technical expertise with educational leadership to create impactful learning experiences.
            </p>
            <p itemProp="knowsAbout">
              With a background in engineering and a passion for teaching, I've successfully guided hundreds of students through their coding journey. My approach combines technical expertise with practical, real-world applications, focusing on modern web development practices that prepare students for professional software development careers.
            </p>
            <p itemProp="knowsAbout">
              I specialize in full-stack web development, with expertise in modern JavaScript frameworks like React and TypeScript, Ruby on Rails for backend development, and cloud technologies including Docker and modern deployment platforms. I'm constantly exploring new technologies and methodologies to stay at the forefront of the industry and bring the latest best practices to my students.
            </p>
            <p>
              When I'm not coding or teaching, I enjoy contributing to open-source projects, speaking at tech meetups in Tokyo, and exploring Tokyo's vibrant tech scene. I believe in continuous learning and sharing knowledge with the developer community.
            </p>
          </article>
          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Full-Stack Development</h3>
              <p>Building scalable web applications from concept to deployment</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3>Technical Education</h3>
              <p>Empowering the next generation of developers through mentorship</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Innovation</h3>
              <p>Constantly exploring emerging technologies and best practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
