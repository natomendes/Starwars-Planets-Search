import { createGlobalStyle } from 'styled-components';
import skyBg from './Images/darkSky.jpg';

export default createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background: rgb(0,0,0);
  }

  ::-webkit-scrollbar-track {
    background: black;
    width: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: #222;
  }

  html {
    font-size: 62.5%;
  }

  body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url(${skyBg}) repeat;
  background-size: 600px;
}

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`;
