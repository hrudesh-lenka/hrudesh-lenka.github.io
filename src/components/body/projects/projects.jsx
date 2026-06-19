import React from 'react'
import Separator from '../../common/separator/separator';
import { ProjectsData } from '../../data/projects'
import ProjectCard from './project-card/project-card';
import './projects.css'

function Projects() {
  const data = ProjectsData;
    return (
        <div className="projects">
          <Separator />
        <label className="section-title" htmlFor="">Projects</label>
        <div className="projects-list">
          {data.map((project)=>{
            return <ProjectCard project={project} key={project.id}/>
          })}
        </div>
        </div>
    )
}

export default Projects
