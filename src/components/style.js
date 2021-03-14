import styled, {css} from 'styled-components';

export const Container = styled.div`
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

export const Hide = styled.div`
  overflow: hidden;
`