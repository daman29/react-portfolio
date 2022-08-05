import { useEffect } from "react";
import {
  ContentContainer,
  SkillsSection,
  SkillContainer,
  SkillCard,
  SkillImage,
  AboutSection,
  AboutText,
  ResumeLink,
} from "../styles/PageStyle";
import { Skills } from "../data/Skills";
import CV from "../assets/CV.pdf";

export function Resume() {
  useEffect(()=> {document.title = "Resume"},[])
  return (
    <ContentContainer>
      <h2>Resume</h2>
      <h3>
        Download my <ResumeLink href={CV} target="_blank" download="Damneet-CV">Resume</ResumeLink>
      </h3>
      <AboutSection>
        <h2>Experience</h2>
        <AboutText>
          <h4>Industry Process Consultant, Feb 2019 - Present</h4>
          <h4>Dassault Systemes Adelaide, SA</h4>
          <p>
            Supporting the pre-sales team to provide value to the client through
            software solutions:
            <p>
              ● Develop and support virtual twin projects across multiple
              industries.
            </p>
            <p>
              ● Present to customers on benefits and value of software to their
              business processes.
            </p>
            <p>
              ● Manage Javascript widgets to interact with our Cities portfolio
            </p>
            <p>
              ● Liaise with stakeholders, R&D, industry experts and management
              as needed.
            </p>
            <p> ● Provide software demos to customers and partners.</p>
          </p>
        </AboutText>
      </AboutSection>
      <AboutSection>
        <h2>Education</h2>
        <AboutText>
          <h4>Certificate in Full Stack Web Development – AUG 2022 </h4>
          The University of Adelaide Adelaide, SA
          <h4>Bachelor of Engineering Civil & Structural (Honours) - 2018 </h4>
          The University of Adelaide Adelaide, SA
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
