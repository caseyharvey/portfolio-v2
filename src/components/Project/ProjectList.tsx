import React from "react"
import projectsArray from "./projectsArray"
import ProjectCard from "./ProjectCard"

function ProjectList() {
  return (
    <>
      {projectsArray.map(project => (
        <ProjectCard
          id={project.id}
          key={project.id}
          name={project.name}
          tag={project.tag}
          url={project.url}
          git={project.git}
          info={project.info}
        />
      ))}
    </>
  )
}

export default ProjectList
