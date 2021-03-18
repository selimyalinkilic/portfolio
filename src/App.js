import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import GlobalStyle from './components/GlobalStyle';
import Nav from "./components/Nav";
import ShowCaseSection from "./components/ShowCaseSection";
import SkillsSection from "./components/SkillsSection";
import {motion} from 'framer-motion';
import {contentAnimation} from './animation';
import { useEffect } from "react";
import styled from "styled-components";
const App = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }) 
  });
  return (
    <div className="App">
      <GlobalStyle />   
      <Nav />      
      <Section variants={contentAnimation} initial="hidden" animate="show" layout>
        <ShowCaseSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </Section>
    </div>
  );
}

const Section = styled(motion.div)`
  @media (max-width: 1300px){
    margin-top: 120px;
  }
`

export default App;
