import "./Portfolio.css";
import SideBar from './SideBar';
import SelfIntroBanner from './SelfIntroBanner';
import Card from './Card';
import projects from './data/projects.json';
import { useState } from 'react';

const Portfolio = ({portFolioVisible}: {portFolioVisible: boolean}) => {
  const [selected, setSelected] = useState('all');

  return (
    <div className={`main-content ${portFolioVisible ? 'main-content-visible' : ''}`}>
      <SideBar setSelected={setSelected}></SideBar>
      <div className="container">
        <SelfIntroBanner></SelfIntroBanner>
        <div className="portfolio">
          {projects
            .filter(
              (project) => selected === 'all' || selected === project.type,
            )
            .map((project) => (
              <Card key={project.url} {...project}></Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
