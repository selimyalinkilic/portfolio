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
  @media (max-width: 1300px){        
    min-height: 75vh;
    flex-direction: column!important;    
    padding: 2rem;
    text-align: center;
  }  
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
  @media (max-width: 1300px){
    padding: 0!important;
  }  
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img{
    width: 100%;
    height: 90%;
    object-fit: cover;    
  }
  @media (max-width: 1300px){
    margin-top: 2rem;    
  }
  @media (min-width: 768px) and (max-width: 1300px){    
    img{
      width: 80%;
      height: 80%;
    }    
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
  @media (max-width: 1300px){
    justify-content: center;    
  }
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
    @media (max-width: 1300px){
      width: 28px;
      height: 28px;
    }
  }
`;