import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    text-align: center;
  `}
`;
export const ContainerButtons = styled.div`
  ${({ theme }) => css``}
`;
export const ContainerCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    border: 1px solid black;
  `}
`;
