import {
  ContentContainer,
  DisplayPictureContainer,
  IntroImage,
  IntroSection,
  IntroText,
  Wave,
} from "../styles/PageStyle";

import displayPicture from "../assets/images/DP_low.jpg";

const headingStyle = {
    fontSize: '40px',
}

export function AboutMe() {
  return (
    <ContentContainer>
      <IntroSection>
        <IntroText>
          <h2 style={headingStyle}>
            <Wave>👋</Wave>Hi, I am
            <span style={headingStyle}> Damneet Sambhy</span>
          </h2>
          <h2>Full Stack Web Developer</h2>
        </IntroText>
        <DisplayPictureContainer>
          <IntroImage src={displayPicture}></IntroImage>
        </DisplayPictureContainer>
      </IntroSection>
    </ContentContainer>
  );
}
