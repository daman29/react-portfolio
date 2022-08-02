import {
  ContentContainer,
  FooterContainer,
  FooterImage,
  SocialContainer,
} from "../styles/FooterStyle";

import emailImage from "../assets/images/email.png";
import linkedinImage from "../assets/images/linkedin.png";
import githubImage from "../assets/images/github.png";
import phoneImage from "../assets/images/phone.png";

export default function Footer() {
  return (
    <FooterContainer>
      <ContentContainer>
        <SocialContainer>
          <a href="mailto:damneet.sambhy@hotmail.com" target="_blank" rel="noreferrer">
            <FooterImage src={emailImage}></FooterImage>
          </a>
          <a href="https://www.linkedin.com/in/damneet-sambhy/" target="_blank" rel="noreferrer">
            <FooterImage src={linkedinImage}></FooterImage>
          </a>
          <a href="https://github.com/daman29" target="_blank" rel="noreferrer">
            <FooterImage src={githubImage}></FooterImage>
          </a>
          <a href="tel:+61450088300" target="_blank" rel="noreferrer">
            <FooterImage src={phoneImage}></FooterImage>
          </a>
        </SocialContainer>
      </ContentContainer>
    </FooterContainer>
  );
}
