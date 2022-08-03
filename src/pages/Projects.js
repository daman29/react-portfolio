import { ProjectsArray } from "../data/Projects";
import Project from "../components/Project";
import { CardContainer } from "../styles/ProjectStyle";
import { ContentContainer } from "../styles/PageStyle";
import { useEffect } from "react";

export function Projects() {
  return (
    <ContentContainer>
      <h2>Projects</h2>
      <CardContainer>
        {ProjectsArray.map((project) => (
          <Project project={project} />
        ))}
      </CardContainer>
    </ContentContainer>
  );
}
