import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #edf6f9;
  }
  
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }

  h1 {
    color: #000;
    font-size: 7rem;
    margin: 0 0 20px;

    &.plus {
      color: #2a9d8f;
    }
    &.minus {
      color: #e63946;
    }
  }
  
  h2 {
    font-size: 2rem;
    margin: 0;
    color: #556581;
  }
`

export default GlobalStyle