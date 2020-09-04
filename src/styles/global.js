import { createGlobalStyle } from 'styled-components';
import bgImage from '../assets/background.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    display: grid;
    place-items: center;
    height: 100vh;
  }

  body{
    background-image: url(${bgImage});
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    color: #333;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif
  }
  button {
    cursor: pointer;
  }
`;
