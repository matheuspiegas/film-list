import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  `}
  h1 {
    font-size: 3rem;
    letter-spacing: 0.3rem;
    font-weight: normal;
  }
`;

