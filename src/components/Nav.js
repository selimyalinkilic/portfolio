import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <Navbar>
      <h1 id="logo"><a  href="#home" rel="noopener noreferrer">Selim Yalinkilic</a></h1>
      <ul>
        <li>
          <a href="#home" rel="noopener noreferrer">Home</a>
        </li>
        <li>
          <a href="#about" rel="noopener noreferrer">About</a>
        </li>
        <li>
          <a href="#skills" rel="noopener noreferrer">Skills</a>
        </li>
        <li>
          <a href="#contact" rel="noopener noreferrer">Contact</a>
        </li>
      </ul>
    </Navbar>
  )
}

const Navbar = styled.nav`
  min-height: 10vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  position: sticky; 
  top: 0;
  background-color: #141923;
  a{
    color: #fff;
    text-decoration: none;
  }
  ul{
    display: flex;
    list-style: none;
  }
  li{
    padding-left: 5rem;
    position: relative;
  }

  #logo{
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
`;

export default Nav
