import styled, { keyframes } from "styled-components";
import { Pallette } from "../assets/ColourPallette";

const waveAnimation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
`;

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

export const Wave = styled.span`
  &:hover {
    animation-name: ${waveAnimation};
    animation-duration: 2.5s;
    animation-iteration-count: infinite; /* Never stop waving :) */
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;
  }
`;

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const AboutText = styled.p`
  text-align: justify;
  margin: 2%;
`;

export const SkillsSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const SkillContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 700px) {
    width: 90%;
  }
`;

export const SkillImage = styled.img`
  max-width: 50px;
  width: 10vw;
`;

export const SkillCard = styled.div`
  max-width: 80px;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;
