import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  ProfileImage,
  TechnologiesContainer,
  TechItem,
  TechIcon,
  TechName,
  AboutSection,
  SectionTitle,
  BioText,
  TechnologyTagline,
} from "./AboutElements";
import LanguageProficiency from "../Languages/LanguageProficiency";

function About() {
  return (
    <AboutSection id="about">
      <div className="Container">
        <SectionTitle>About Me</SectionTitle>
        <div className="BigCard " style={{backgroundColor:"black"}}>
          <ProfileImage src=".//myimages/LookingAtU.jpg" alt="Profile Image" />
          <div className="AboutBio">
            <BioText>
              Hello! My name is <strong>Yuvraj Warad</strong>. I’m from Maharashtra, India, and have been living in Pune for the past five years. I’m currently working as a Software Engineer (frontend Developer) with over 1 years of experience. During this time, I’ve developed strong skills in various technologies and have been involved in numerous projects.
              <br />
              <br />
              My journey into technology started with a passion for problem-solving, which led me to study Computer Systems Technology. This challenging program helped me develop a robust work ethic and build valuable friendships.
              <br />
              <br />
              I enjoy collaborating within teams and am always eager to explore new projects, especially in web development and cross-platform mobile development.
              <br />
              <br />
              <TechnologyTagline>
                I am proficient with the following technologies:
              </TechnologyTagline>
            </BioText>
            <TechnologiesContainer>
              {stackList.map((stack, index) => (
                <TechItem key={index} animateIn="fadeInLeft">
                  <TechIcon src={stack.img} alt={stack.name} />
                  <TechName>{stack.name}</TechName>
                </TechItem>
              ))}
            </TechnologiesContainer>
          </div>
          <LanguageProficiency />
        </div>
      </div>
    </AboutSection>
  );
}

export default About;
