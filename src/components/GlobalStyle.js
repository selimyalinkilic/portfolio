import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 80%;
    @media (max-width: 1400px){
      font-size: 75%;      
    }    
  }

  body{
    background-color: #1A202C;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  h2{
    font-weight: bolder;
    font-size: 3.5rem;
    color: #4FD1C5;
  }

  p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;    

    & a{
       color: #4FD1C5;
       text-decoration: none;
       border-bottom: 2px solid #4FD1C5;
       font-weight: 600;
    }
  }  

`;

export default GlobalStyle;