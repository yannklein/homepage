import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a software developer and bootcamp manager at Le Wagon Tokyo, where I help aspiring developers transform their careers through intensive coding education.
            </p>
            <p>
              With a background in engineering and a passion for teaching, I've successfully guided hundreds of students through their coding journey. My approach combines technical expertise with practical, real-world applications.
            </p>
            <p>
              I specialize in full-stack web development, with expertise in modern JavaScript frameworks, Ruby on Rails, and cloud technologies. I'm constantly exploring new technologies and methodologies to stay at the forefront of the industry.
            </p>
            <p>
              When I'm not coding or teaching, I enjoy contributing to open-source projects, speaking at tech meetups, and exploring Tokyo's vibrant tech scene.
            </p>
          </div>
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
