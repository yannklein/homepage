import './Skills.css';
import { SiReact, SiRuby, SiJavascript, SiTypescript, SiNodedotjs, SiPostgresql, SiMongodb, SiRedis, SiDocker, SiGit, SiHeroku, SiNetlify } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Ruby on Rails', icon: SiRuby },
        { name: 'Node.js', icon: SiNodedotjs },
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
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: SiDocker },
        { name: 'Git', icon: SiGit },
        { name: 'Heroku', icon: SiHeroku },
        { name: 'Netlify', icon: SiNetlify },
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section" itemScope itemType="https://schema.org/ItemList">
      <div className="section-container">
        <h2 className="section-title" itemProp="name">Skills & Technologies</h2>
        <meta itemProp="description" content="Technical skills and technologies that Yann Klein specializes in, including frontend, backend, database, and DevOps tools" />
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <article key={category.title} className="skill-category" itemScope itemType="https://schema.org/ItemList">
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
