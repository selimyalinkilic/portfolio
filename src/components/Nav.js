import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
// import {navbarAnimation} from '../animation';

const Nav = () => {
  const [location, setLocation] = useState("#home");
  const handleLocation = e => { 
    setLocation(e.target.hash);
  }
  return (
    <Navbar>
      <h1 id="logo"><a  href="#home" rel="noopener noreferrer">Selim Yalinkilic</a></h1>
      <ul>
        <li>          
          <Link href="#home" to="home" spy={true} smooth={true} offset={-300} duration={500} onClick={handleLocation} onSetActive={() => setLocation("#home")}>Home</Link>
          <Line transition={{duration: 0.5}} initial={{width: "0%"}} animate={{width: location === "#home" ? "100%" : "0%" }} />
        </li>
        <li>
          <Link href="#about" to="about" spy={true} smooth={true} offset={-300} duration={500} onClick={handleLocation} onSetActive={() => setLocation("#about")}>About</Link>
          <Line transition={{duration: 0.5}} initial={{width: "0%"}} animate={{width: location === "#about" ? "100%" : "0%" }} />
        </li>
        <li>
          <Link href="#skills" to="skills" spy={true} smooth={true} offset={-300} duration={500} onClick={handleLocation} onSetActive={() => setLocation("#skills")}>Skills</Link>
          <Line transition={{duration: 0.5}} initial={{width: "0%"}} animate={{width: location === "#skills" ? "100%" : "0%" }} />
        </li>
        <li>
          <Link href="#contact" to="contact" spy={true} smooth={true} offset={-300} duration={500} onClick={handleLocation} onSetActive={() => setLocation("#contact")}>Contact</Link>          
          <Line transition={{duration: 0.5}} initial={{width: "0%"}} animate={{width: location === "#contact" ? "100%" : "0%" }} />
        </li>
      </ul>
    </Navbar>
  )
}

const Navbar = styled(motion.nav)`
  height: 85px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #141923;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;
  a{
    color: #fff;
    text-decoration: none;
  }
  ul{
    display: flex;
    list-style: none;
  }
  li{
    margin-left: 3rem;
    position: relative;
    padding: 0 1rem;
    &:first-child{
      margin-left: 0;
    }
  }

  #logo{
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  @media (max-width: 1300px){
    flex-direction: column;
    padding: 1.25rem;
    height: auto;    
    #logo{
      display: inline-block;
      padding-bottom: 1.25rem;
    }
    ul{
      padding: 0;
      justify-content: space-around;
      width: 100%;      
      margin-bottom: 1rem;
    }
    li{
      padding: 0;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #4FD1C5;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 0;  
`;

export default Nav
