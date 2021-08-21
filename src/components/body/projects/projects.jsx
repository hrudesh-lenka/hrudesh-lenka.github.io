import React from 'react'
import Separator from '../../common/separator/separator';
import { ProjectsData } from '../../data/projects'
import ProjectCard from './project-card/project-card';

function Projects() {
  const data = ProjectsData;
    return (
        <div className="projects">
          <Separator />
        <label className="section-title" htmlFor="">Projects</label>
        <div className>
          {data.map((project)=>{
            return <ProjectCard project={project}/>
          })}
        </div>
        </div>
    )
}

export default Projects
