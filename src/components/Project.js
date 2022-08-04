import React from "react";
import { ProjectCard } from "../styles/ProjectStyle";

export default function Project({
  name,
  description,
  github,
  deployed,
  image,
  gif,
  technologies,
}) {
  return <ProjectCard><h3>Project</h3></ProjectCard>;
}
