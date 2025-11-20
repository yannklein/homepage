import './Skills.css';
import { SiReact, SiRuby, SiJavascript, SiTypescript, SiNodedotjs, SiPostgresql, SiMongodb, SiRedis, SiDocker, SiGit, SiPython, SiVuedotjs, SiSvelte, SiThreedotjs, SiAmazon, SiGooglecloud, SiTensorflow, SiScikitlearn, SiUnity, SiCplusplus, SiPhp, SiSap, SiLinux } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      highlight: true,
      skills: [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'React', icon: SiReact },
        { name: 'Vue.js', icon: SiVuedotjs },
        { name: 'Svelte', icon: SiSvelte },
        { name: 'Ruby on Rails', icon: SiRuby },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Three.js', icon: SiThreedotjs },
        { name: 'PHP', icon: SiPhp },
      ],
    },
    {
      title: 'Data Science & AI',
      highlight: true,
      skills: [
        { name: 'Python', icon: SiPython },
        { name: 'Scikit-learn', icon: SiScikitlearn },
        { name: 'TensorFlow', icon: SiTensorflow },
      ],
    },
    {
      title: 'Cloud & Infrastructure',
      highlight: true,
      skills: [
        { name: 'AWS', icon: SiAmazon },
        { name: 'GCP', icon: SiGooglecloud },
        { name: 'Docker', icon: SiDocker },
        { name: 'Linux', icon: SiLinux },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Redis', icon: SiRedis },
      ],
    },
    {
      title: 'Extended Reality & 3D',
      skills: [
        { name: 'Unity', icon: SiUnity },
        { name: 'Three.js', icon: SiThreedotjs },
      ],
    },
    {
      title: 'Enterprise Systems',
      skills: [
        { name: 'SAP ERP', icon: SiSap },
        { name: 'Git', icon: SiGit },
        { name: 'C++', icon: SiCplusplus },
      ],
    },
  ];

  const leadershipSkills = [
    'Program & Project Management',
    'Team Leadership & Mentoring',
    'Agile Methodologies',
    'Technical Training & Education',
    'Cross-cultural Communication',
    'Business System Strategy',
  ];

  return (
    <section id="skills" className="section skills-section" itemScope itemType="https://schema.org/ItemList">
      <div className="section-container">
        <h2 className="section-title" itemProp="name">Skills & Technologies</h2>
        <meta itemProp="description" content="Technical skills and technologies that Yann Klein specializes in, including frontend, backend, database, and DevOps tools" />

        <div className="leadership-section">
          <h3 className="leadership-title">Leadership & Management</h3>
          <p className="leadership-description">
            With 15+ years leading technical teams and programs, I've managed bootcamps with 150+ projects, coached teams across Japan and Korea, and driven award-winning innovation initiatives at enterprise scale.
          </p>
          <div className="leadership-skills">
            {leadershipSkills.map((skill) => (
              <span key={skill} className="leadership-skill">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <article key={category.title} className={`skill-category ${category.highlight ? 'highlight' : ''}`} itemScope itemType="https://schema.org/ItemList">
              <h3 className="category-title" itemProp="name">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="skill-item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                      <meta itemProp="position" content={String(catIndex * 10 + skillIndex)} />
                      <div className="skill-icon" role="img" aria-label={`${skill.name} icon`}>
                        <Icon />
                      </div>
                      <span className="skill-name" itemProp="name">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
