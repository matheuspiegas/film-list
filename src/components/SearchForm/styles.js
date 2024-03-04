import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    background-color: slategray;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    > a {
      margin-left: 5rem;
      font-size: 2rem;
      text-decoration: none;
      cursor: pointer;
      color: #333;
    }

    & form {
      display: flex;
      gap: 0 1rem;
      align-items: stretch;
      justify-content: center;
      height: 2rem;
      & input {
        border: none;
        background-color: #ccc;
        outline: none;
        border-radius: 0.3rem;
        width: 20rem;
        padding: 1rem;
      }
    }
  `}
`;
