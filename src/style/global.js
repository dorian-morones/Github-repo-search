import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Roboto&display=swap');
  body{
    font-family: 'Roboto', sans-serif;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  h2{
      font-family: 'Bebas Neue', cursive;
  }
  select{
    margin-right: 20px;
    float: left;
  }
  button{
      margin-right: 20px;
  }

  a {
    color: #00989f;
  }
`;
