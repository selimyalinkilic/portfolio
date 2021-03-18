import React from "react";
import aboutme from "../img/aboutme.svg";
import { Container, Description, Hide, Image } from './style';
import { scrollReveal } from "../animation";
import {useScroll} from './useScroll';

const AboutSection = () => {
  const [element, controls] = useScroll();
  return (
    <Container variants={scrollReveal} animate={controls} initial="hidden" reverse ref={element} id="about">
      <Description pr5>
        <Hide>
          <h2>About</h2>
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
    </Container>
  );
};




export default AboutSection;
