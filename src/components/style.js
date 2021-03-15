import { motion } from 'framer-motion';
import styled, {css} from 'styled-components';

export const Container = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;  
  padding: 5rem;
  color: white;
  ${props =>
    props.reverse &&
    css`
      flex-direction: row-reverse;            
    `};
`;

export const Description = styled.div`
  flex: 1;
  ${props =>
    props.pl5 ?
    css`
      padding-left: 5rem;
    `: props.pr5 &&
    css`
      padding-left: 5rem;
    `};
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img{
    width: 100%;
    height: 90%;
    object-fit: cover;    
  }
`;

export const Hide = styled(motion.div)`
  overflow: hidden;
`;

export const SocialMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-top: 1rem;
`;

export const SocialMenuItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  &::last-child{
    margin-right: 0;
  }
`;

export const SocialMenuLink = styled.a`
  color: transparent;
  text-decoration: none;
  display: block;
  img{
    width: 35px;
    height: 35px;
  }
`;