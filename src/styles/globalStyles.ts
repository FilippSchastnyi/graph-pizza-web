import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    outline: none !important;
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  html, body {
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
  }

  input, textarea {
    -webkit-appearance: none;
    border-radius: 0;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type=number] {
      -moz-appearance:textfield;
    }

    &::-ms-clear {
      display: none !important;
    }

    &::-ms-reveal {
      display: none !important;
    }
  }

  figure {
    margin: 0;
  }

  button {
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  main {
    display: block;
  }

  ul,
  ol,
  nav {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }



  a {
    color: inherit;
    text-decoration: none;
    transition: 0.3s;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }

  img {
    max-width: 100%;
  }

  input, select, textarea, button {
    font-family: inherit;
  }
  
  #root {
    display: flex;
    min-width: 100%;
    min-height: 100vh;
  }

  body {
    font-family: sans-serif, -apple-system,
    'BlickMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
    font-size: 14px;
    color: #000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
