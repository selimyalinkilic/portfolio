import React from "react";
import portfolio from "../img/portfolio.svg";

const ShowCaseSection = () => {
  return (
    <div className="showcase">
      <div className="description">
        <div className="hide">
          <h2>Hey</h2>
        </div>
        <div className="hide">
          <p>I am SELIM YALINKILIC. A frontend developer from Turkey.</p>
        </div>
      </div>
      <div className="image">
        <img src={portfolio} alt="Portfolio" />
      </div>
    </div>
  );
};

export default ShowCaseSection;
