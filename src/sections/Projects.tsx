import './Projects.css';
import Card from '../Card';
import projects from '../data/projects.json';
import { useState } from 'react';

const Projects = () => {
  const [selected, setSelected] = useState('all');

  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'pro', label: 'Professional' },
    { value: 'code', label: 'Personal' },
    { value: 'teaching', label: 'Teaching' },
    { value: 'care', label: 'Care' },
  ];

  const getFilteredProjects = () => {
    if (selected === 'all') return projects;
    if (selected === 'code') {
      return projects.filter(p => ['code', 'vr', 'maker', 'love'].includes(p.type));
    }
    if (selected === 'teaching') {
      return projects.filter(p =>
        p.type === 'help' &&
        (p.title.includes('Coding Tutorial') ||
         p.title.includes('Le Wagon'))
      );
    }
    if (selected === 'care') {
      return projects.filter(p =>
        p.type === 'help' &&
        !p.title.includes('Coding Tutorial') &&
        !p.title.includes('Le Wagon')
      );
    }
    if (selected === 'pro') {
      return projects.filter(p => p.type === 'pro');
    }
    return projects.filter(p => p.type === selected);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
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
