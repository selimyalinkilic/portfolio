import React from "react";
import aboutme from "../img/aboutme.svg";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <Hide>
          <h2>About Me</h2>
        </Hide>
        <Hide>
          <p>
            I am a front end developer working at&nbsp;
            <a
              href="https://www.shopier.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shopier
            </a>
            . Also love to improving myself about to new techs.
          </p>
        </Hide>
      </Description>
      <Image>
        <img src={aboutme} alt="About Me" />
      </Image>
    </About>
  );
};

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;  
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


export default AboutSection;
