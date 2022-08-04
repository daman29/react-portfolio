import React from "react";
import { ProjectCard, ProjectImage, ProjectTitle } from "../styles/ProjectStyle";

export default function Project({project}) {
  return (
    <ProjectCard>
      <ProjectImage src={project.image}></ProjectImage>
      <ProjectTitle>{project.name}</ProjectTitle>
    </ProjectCard>
  );
}
