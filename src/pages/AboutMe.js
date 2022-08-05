import {
  AboutSection,
  AboutText,
  ContentContainer,
  DisplayPictureContainer,
  IntroImage,
  IntroSection,
  IntroText,
  SkillCard,
  SkillContainer,
  SkillImage,
  SkillsSection,
  Wave,
} from "../styles/PageStyle";

import displayPicture from "../assets/images/DP_low.jpg";

import { Skills } from "../data/Skills";
import { useEffect } from "react";

const headingStyle = {
  fontSize: "40px",
};

export function AboutMe() {
  useEffect(()=> {document.title = "Damneet Sambhy"},[])
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
      <AboutSection>
        <h2>About Me</h2>
        <AboutText>
          Civil and Structural Engineer by qualification but a problem solver by
          passion. I am currently working as a pre-sales consultant at Dassault
          Systemes in Australia, but my interest in coding has led me to start
          the web development bootcamp. I love using my creative side in
          everything that I do. I'm passionate about{" "}
          <a
            id="text-link"
            href="https://www.youtube.com/sambhymusic"
            target="_blank"
            rel="noreferrer"
          >
            music
          </a>
          , web development and basketball.
        </AboutText>
      </AboutSection>
      <SkillsSection>
        <h2>My Skills</h2>
        <SkillContainer>
          {Skills.map((skill) => {
            return (
              <SkillCard key={skill.id}>
                <SkillImage src={skill.image}></SkillImage>
                <h4>{skill.name}</h4>
              </SkillCard>
            );
          })}
        </SkillContainer>
      </SkillsSection>
    </ContentContainer>
  );
}
