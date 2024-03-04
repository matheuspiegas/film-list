import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
`;

export default GlobalStyle;
