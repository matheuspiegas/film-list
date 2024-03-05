import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&display=swap');
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans", sans-serif;
  }
  button {
        width: 2rem;
        background-color: #333;
        border-radius: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        border: none;
        cursor: pointer;
        > svg {
          color: white;
        }
      }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default GlobalStyle;
