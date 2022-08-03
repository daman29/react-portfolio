import styled from "styled-components";
import { Pallette } from "../assets/ColourPallette";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 80px;
  width: 100%;
  background-color: ${Pallette.primary};
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1500px;
`;

export const SocialContainer = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const FooterImage = styled.img`
  height: 60px;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
`;
