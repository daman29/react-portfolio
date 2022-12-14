import { useEffect } from "react";
import { ProjectsArray } from "../data/Projects";
import Project from "../components/Project";
import { CardContainer } from "../styles/ProjectStyle";
import { ContentContainer } from "../styles/PageStyle";

export function Projects() {
  useEffect(()=> {document.title = "My Projects"},[])
  return (
    <ContentContainer>
      <h2>Projects</h2>
      <CardContainer>
        {ProjectsArray.map((project) => (
          <Project project={project} key={project.id}/>
        ))}
      </CardContainer>
    </ContentContainer>
  );
}
