import React from "react";
import { Container, Description, Hide, Image } from './style';
import portfolio from "../img/portfolio.svg";

const ShowCaseSection = () => {
  return (
    <Container>
      <Description pl5>
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
    </Container>
  );
};

export default ShowCaseSection;
