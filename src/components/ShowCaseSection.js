import React from "react";
import styled from 'styled-components';
import portfolio from "../img/portfolio.svg";

const ShowCaseSection = () => {
  return (
    <ShowCase>
      <Description>
        <Hide>
          <h2>Hi</h2>
        </Hide>
        <Hide>
          <p>I am SELIM YALINKILIC. A frontend developer from Turkey.</p>
        </Hide>
      </Description>
      <Image>
        <img src={portfolio} alt="Portfolio" />
      </Image>
    </ShowCase>
  );
};

const ShowCase = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;
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

export default ShowCaseSection;
