import React from 'react';
import styled from 'styled-components';
import skills from "../img/skills.svg";

const SkillsSection = () => {
  return (
    <Skills>
      <Description>
        <Hide>
          <h2>Skills</h2>
        </Hide>
        <Hide>
          <p>
            You can see my skills from&nbsp;
            <a
              href="https://www.shopier.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            &nbsp;profile and my&nbsp;<a
              href="https://www.shopier.com"
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
    </Skills>
  )
}

const Skills = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;  
  padding: 5rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-left: 5rem;  
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img{
    width: 100%;
    height: 90%;
    object-fit: cover;    
  }
`;

const Hide = styled.div`
  overflow: hidden;
`

export default SkillsSection
