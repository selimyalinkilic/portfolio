import React from 'react';
import skills from "../img/skills.svg";
import { Container, Description, Hide, Image } from './style';
import { scrollReveal } from '../animation';
import {useScroll} from './useScroll';
 
const SkillsSection = () => {
  const [element, controls] = useScroll();
  return (
    <Container variants={scrollReveal} animate={controls} initial="hidden" ref={element} id="skills">
      <Description pl5>
        <Hide>
          <h2>Skills</h2>
        </Hide>
        <Hide>
          <p>
            You can see my skills from&nbsp;
            <a
              href="https://github.com/selimyalinkilic"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            &nbsp;profile and my&nbsp;<a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>&nbsp;.            
          </p>
        </Hide>
      </Description>
      <Image>
        <img src={skills} alt="Skills" />
      </Image>
    </Container>
  )
}




export default SkillsSection
