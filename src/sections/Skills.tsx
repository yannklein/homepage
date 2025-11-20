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
    'Program Management',
    'Team Leadership',
    'Agile Methodologies',
    'Technical Training',
    'Cross-cultural',
    'System Strategy',
  ];

  return (
    <section id="skills" className="section skills-section" itemScope itemType="https://schema.org/ItemList">
      <div className="section-container">
        <h2 className="section-title" itemProp="name">Skills & Technologies</h2>
        <meta itemProp="description" content="Technical skills and technologies that Yann Klein specializes in, including frontend, backend, database, and DevOps tools" />

        <div className="skills-intro">
          <p>15+ years building web applications, machine learning models, and leading technical programs. Expertise spans full-stack development, data science, cloud infrastructure, and team management.</p>
        </div>

        <div className="leadership-compact">
          <h3>Leadership</h3>
          <div className="leadership-tags">
            {leadershipSkills.map((skill) => (
              <span key={skill}>{skill}</span>
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
