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
  justify-content: space-between;
  align-items: center;
  flex: 1 1 31%;
  margin: 1%;
  background-color: ${Pallette.skyBlue};
  min-height: 60vh;
  border-radius: 5%;
  color: black;
  text-align: center;
  box-sizing: border-box;
  @media (max-width: 700px) {
    flex: 1 1 48%;
  }
  @media (max-width: 500px) {
    flex: 1 1 98%;
  }
`;

export const ProjectImage = styled.img`
  border-radius: 5% 5% 0 0;
  object-fit: cover;
  width: 100%;
  &:hover {
    src: ${(props) => props.gif ? props.gif : ''}
  }
`;

export const ProjectTitle = styled.h3`
  margin: 2%;
`;

export const ProjectDescription = styled.p`
  margin: 2%;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: 2%;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${Pallette.textSecondary};
`
