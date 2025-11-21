import './Projects.css';
import Card from '../Card';
import projects from '../data/projects.json';
import { useState } from 'react';

interface ProjectsProps {
  togglePortFolioVisibility: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ togglePortFolioVisibility }) => {
  const [selected, setSelected] = useState('all');

  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'pro', label: 'Freelancing' },
    { value: 'hobby', label: 'Personal' },
    { value: 'teaching', label: 'Teaching' },
    { value: 'care', label: 'Care' },
  ];

  const getFilteredProjects = () => {
    if (selected === 'all') return projects;
    return projects.filter(p => p.category === selected);
  };

  return (
    <section id="projects" className="section projects-section" onClick={togglePortFolioVisibility}>
      <div className="section-container" onClick={event => event.stopPropagation()}>
        <h2 className="section-title">Projects</h2>
        <div className="filter-buttons">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelected(option.value)}
              className={`filter-btn ${selected === option.value ? 'active' : ''}`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {getFilteredProjects().map((project) => (
            <Card key={project.url} {...project}></Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
