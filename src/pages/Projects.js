import { ProjectsArray } from "../data/Projects";
import Project from "../components/Project";
import { CardContainer } from "../styles/ProjectStyle";

export function Projects() {
  return (
    <CardContainer>
      {ProjectsArray.map((project) => (
        <Project project={project} />
      ))}
    </CardContainer>
  );
}
