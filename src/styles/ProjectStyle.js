import styled from "styled-components";
import { Pallette } from "../assets/ColourPallette";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 31%;
  margin: 1%;
  background-color: ${Pallette.primaryLight};
  min-height: 30vh;
  border-radius: 5%;
  @media (max-width: 700px) {
    flex: 1 1 48%;
  }
  @media (max-width: 500px) {
    flex: 1 1 98%;
  }
`;
