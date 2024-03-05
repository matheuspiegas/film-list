import styled from "styled-components";

export const ContainerMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 70%;
`;

export const MovieCard = styled.div`
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
`;
export const MovieTitle = styled.h3`
  font-size: 20px;
  font-weight: normal;
  word-wrap: break-word;
`;
