import { createGlobalStyle } from 'styled-components';
import bgImage from '../assets/background.png';
import './fonts.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    /* display: grid;
    place-items: center;
    height: 100vh; */
    background-image: url(${bgImage});
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    color: #333;
    font-size: 14px;
    font-family: Helvetica, sans-serif;

  }
  button {
    cursor: pointer;
  }

  .questionAnswer{
    text-align: justify;
    margin-top: 48px;
    font-family: 'Bebas Neue', cursive;
    font-size: 1.5rem;
  }

  #btnNext {
    margin-top: 10px;
    width: 30%;
  }
`;
