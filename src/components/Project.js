import React from "react";
import {
  Link,
  LinksContainer,
  ProjectCard,
  ProjectDescription,
  ProjectImage,
  ProjectTitle,
} from "../styles/ProjectStyle";

export default function Project({ project }) {
  return (
    <ProjectCard>
      <ProjectImage src={project.image} onMouseOver={e => (e.currentTarget.src = project.gif)} onMouseOut = {e => (e.currentTarget.src = project.image)}></ProjectImage>
      <ProjectDescription>{project.description}</ProjectDescription>
      <ProjectTitle>{project.name}</ProjectTitle>
      <LinksContainer>
        <Link href={project.githubLink}>Github</Link>
        <Link href={project.deployedLink}>Deployed App</Link>
      </LinksContainer>
    </ProjectCard>
  );
}
