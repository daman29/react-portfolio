import styled from "styled-components";
import { Pallette } from "../assets/ColourPallette";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1400px;
`;

export const IntroSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;
export const IntroText = styled.div`
  flex: 2 1 65%;
  margin: 2%;
`;

export const DisplayPictureContainer = styled.div`
  flex: 1 5 35%;
  margin: 2%;
`;

export const IntroImage = styled.img`
  height: 33vw;
  max-height: 350px;
  width: auto;
  border: 5px dotted ${Pallette.secondary};
  border-radius: 50%;
  padding: 2px;
`;

export const AboutSection = styled.div``;

export const SkillsSection = styled.div``;
