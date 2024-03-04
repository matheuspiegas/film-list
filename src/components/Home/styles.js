import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  `}
`;

export const ContainerMovies = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    width: 70%;
  `}
`;

export const MovieCard = styled.div`
  ${({ theme }) => css`
    text-align: center;
    width: 200px;
    flex-direction: column;
    /* background-color: red; */
    align-items: center;
    max-width: 100%;
    gap: 2rem;
    > a {
      text-decoration: none;
      color: black;
    }
    > a img {
      max-width: 100%;
      border-radius: 3px;
      height: 300px;
      transition: transform 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
    > h2 {
      word-wrap: break-word;
    }
  `}
`;

export const ContainerPagination = styled.div`
  margin-bottom: 2rem;
`;
export const ContainerPages = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
export const ContainerButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
