import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 2rem;

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
      & button {
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
    }
  `}
`;
