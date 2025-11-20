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
              I’m a maker at heart, the kind of person who gets equally excited about building full-stack applications, tinkering with VR/AR prototypes, and figuring out why my AI models occasionally behave like chaotic toddlers. When I’m not busy exploring the edges of tech, you’ll probably find me obsessing over leathercraft—yes, it’s a real addiction, and no, I’m not seeking help.
            </p>
            <p itemProp="knowsAbout">
              I’m also a big believer in humans: helping coding bootcamp students transform their lives is what gets me out of bed every morning (well… that and coffee ☕). I volunteer at Migracode to teach programming for free, and I’ve worked with sustainability-driven startups because I want my projects to make the planet slightly better, not worse.
            </p>
            <p itemProp="knowsAbout">
              Curious? Intrigued? Mildly concerned? Perfect. Let’s grab a coffee—or if you’re feeling camera-ready, jump on a Zoom call 🎥.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
