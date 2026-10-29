import './Skills.css';
import { SiReact, SiRuby, SiJavascript, SiTypescript, SiNodedotjs, SiPostgresql, SiMongodb, SiRedis, SiDocker, SiGit, SiPython, SiVuedotjs, SiSvelte, SiThreedotjs, SiAmazon, SiGooglecloud, SiTensorflow, SiScikitlearn, SiUnity, SiCplusplus, SiPhp, SiSap, SiLinux, SiNumpy, SiPandas, SiPlotly, SiKeras, SiMysql, SiHeroku, SiGithubcopilot, SiOpenai, SiGooglegemini, SiNextdotjs, SiGraphql, SiTailwindcss, SiClaude, SiAnthropic, SiN8N, SiCloudflare, SiDebian, SiNginx, SiDrizzle, SiPrisma } from 'react-icons/si';
import { TbBrandCSharp, TbSparkles, TbRobot, TbPlug, TbServer, TbAntenna, TbSatellite, TbPlanet } from 'react-icons/tb';

interface SkillsProps {
  togglePortFolioVisibility: () => void;
}

const Skills: React.FC<SkillsProps> = ({ togglePortFolioVisibility }) => {
  const skillCategories = [
    {
      title: 'Web Development',
      highlight: true,
      skills: [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'GraphQL', icon: SiGraphql },
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
        { name: 'NumPy', icon: SiNumpy },
        { name: 'Pandas', icon: SiPandas },
        { name: 'Scikit-learn', icon: SiScikitlearn },
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'Keras', icon: SiKeras },
        { name: 'Matplotlib', icon: SiPlotly },
        { name: 'Plotly', icon: SiPlotly },
      ],
    },
    {
      title: 'AI Automation & Agents',
      highlight: true,
      skills: [
        { name: 'n8n', icon: SiN8N },
        { name: 'Claude API', icon: SiAnthropic },
        { name: 'OpenAI API', icon: SiOpenai },
        { name: 'AI Agents', icon: TbRobot },
        { name: 'MCP', icon: TbPlug },
      ],
    },
    {
      title: 'Augmented Programming',
      highlight: true,
      skills: [
        { name: 'Claude Code', icon: SiClaude },
        { name: 'Cursor', icon: TbSparkles },
        { name: 'GitHub Copilot', icon: SiGithubcopilot },
        { name: 'OpenAI', icon: SiOpenai },
        { name: 'Google AI Studio', icon: SiGooglegemini },
      ],
    },
    {
      title: 'Cloud & Infrastructure',
      highlight: true,
      skills: [
        { name: 'AWS', icon: SiAmazon },
        { name: 'GCP', icon: SiGooglecloud },
        { name: 'Heroku', icon: SiHeroku },
        { name: 'Docker', icon: SiDocker },
        { name: 'Linux', icon: SiLinux },
        { name: 'Debian homelab', icon: SiDebian },
        { name: 'Coolify', icon: TbServer },
        { name: 'Cloudflare', icon: SiCloudflare },
        { name: 'Nginx', icon: SiNginx },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Redis', icon: SiRedis },
        { name: 'SQL', icon: SiMysql },
        { name: 'Prisma', icon: SiPrisma },
        { name: 'Drizzle ORM', icon: SiDrizzle },
      ],
    },
    {
      title: 'Radio & Space',
      skills: [
        { name: 'RTL-SDR', icon: TbAntenna },
        { name: 'SatDump', icon: TbSatellite },
        { name: 'Orbital mechanics (SGP4)', icon: TbPlanet },
      ],
    },
    {
      title: 'Extended Reality & 3D',
      skills: [
        { name: 'Unity', icon: SiUnity },
        { name: 'C#', icon: TbBrandCSharp },
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
    'Product Ownership',
    'Team Leadership',
    'Workshops & Public Speaking',
    'Agile Methodologies',
    'Technical Training',
    'Cross-cultural',
    'System Strategy',
  ];

  return (
    <section id="skills" className="section skills-section" itemScope itemType="https://schema.org/ItemList" onClick={togglePortFolioVisibility}>
      <div className="section-container" onClick={event => event.stopPropagation()}>
        <h2 className="section-title" itemProp="name">Skills & Technologies</h2>
        <meta itemProp="description" content="Technical skills and technologies that Yann Klein specializes in, including frontend, backend, AI automation, database, and DevOps tools" />

        <div className="skills-intro">
          <p>15+ years building web applications, machine learning models, and leading technical programs. Expertise spans full-stack development, AI automation, data science, cloud and self-hosted infrastructure, and team management.</p>
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
