import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --red: #e02041;
    --blue: #1CC5DC;
    --green: #81c784;

    --accent: #81c784;
    --background: #303030;
    --foreground: #424242;

    --text: #dddddd;
    --title-secondary: #41414d;

    --text-primary: #737380;
    --text-secondary: #a8a8b3;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    // background-color: var( --foreground);
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Poppins', sans-serif;
    // color: var(--text);
  }
  h1 {
    font-size: 2rem;
    font-weight: 500;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`;
