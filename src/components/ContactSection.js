import React from 'react'
import { Container, Description, Hide, Image, SocialMenu, SocialMenuItem, SocialMenuLink } from './style'
import contact from '../img/contact.svg';
import facebook from '../img/facebook.svg';
import gmail from '../img/gmail.svg';
import instagram from '../img/instagram.svg';
import linkedin from '../img/linkedin.svg';
import twitter from '../img/twitter.svg';
import { scrollReveal } from '../animation';
import {useScroll} from './useScroll';

const ContactSection = () => {
  const [element, controls] = useScroll();
  return (
    <Container variants={scrollReveal} animate={controls} initial="hidden" reverse ref={element} id="contact">
      <Description pl5>
        <Hide>
          <h2>Contact</h2>
        </Hide>
        <Hide>
          <p>While we're good with smoke signals, there are simpler ways for us to get in touch.</p>
          <SocialMenu>
            <SocialMenuItem>
              <SocialMenuLink href="https://www.facebook.com/selimyalinkilic/" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" title="Facebook" />
              </SocialMenuLink>
            </SocialMenuItem>
            <SocialMenuItem>
              <SocialMenuLink href="https://twitter.com/selimyalnklc" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" title="Twitter" />
              </SocialMenuLink>
            </SocialMenuItem>
            <SocialMenuItem>
              <SocialMenuLink href="https://www.instagram.com/selimyalnklc/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" title="Instagram" />
              </SocialMenuLink>
            </SocialMenuItem>
            <SocialMenuItem>
              <SocialMenuLink href="https://www.linkedin.com/in/selimyalinkilic/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="Linkedin" title="Linkedin" />
              </SocialMenuLink>
            </SocialMenuItem>
            <SocialMenuItem>
              <SocialMenuLink href="mailto:yalinkilicselim@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={gmail} alt="Gmail" title="Gmail" />
              </SocialMenuLink>
            </SocialMenuItem>
          </SocialMenu>          
        </Hide>
      </Description>
      <Image>
        <img src={contact} alt="Contact" />
      </Image>
    </Container>
  )
}

export default ContactSection
