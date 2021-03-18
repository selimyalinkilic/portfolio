import React from "react";
import { Container, Description, Hide, Image } from './style';
import portfolio from "../img/portfolio.svg";
import {motion} from 'framer-motion';
import {titleAnimation, fade, photoAnimation} from '../animation';

const ShowCaseSection = () => { 
  return (
    <Container id="home">
      <Description pl5>              
        <Hide>
          <motion.h2 variants={titleAnimation} initial="hidden" animate="show">Hi</motion.h2>
        </Hide>
        <Hide>
          <motion.p variants={fade} initial="hidden" animate="show">I am SELIM YALINKILIC. A frontend developer from Turkey.</motion.p >
        </Hide>
      </Description>
      <Image>
        <motion.img variants={photoAnimation} src={portfolio} alt="Portfolio" />
      </Image>
    </Container>
  );
};

export default ShowCaseSection;
