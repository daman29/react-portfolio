import {
  ContentContainer,
  DisplayPictureContainer,
  IntroImage,
  IntroSection,
  IntroText,
} from "../styles/PageStyle";

import displayPicture from '../assets/images/DP_low.jpg'

export function AboutMe() {
  return (
    <ContentContainer>
      <IntroSection>
        <IntroText></IntroText>
        <DisplayPictureContainer>
          <IntroImage src={displayPicture}></IntroImage>
        </DisplayPictureContainer>
      </IntroSection>
    </ContentContainer>
  );
}
