import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Card = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 80%;
    margin: 3rem auto;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ContainerInfo = styled.div`
  @media (min-width: 768px) {
    margin-top: 2rem;
    margin-inline: 2rem;
    width: 80%;
  }
`;
export const Info = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    span {
      font-weight: 400;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const ContainerPoster = styled.div`
  @media (min-width: 768px) {
  }
  @media (max-width: 768px) {
    margin-block: 3rem;
  }
`;
export const Poster = styled.img`
  @media (min-width: 768px) {
    width: 250px;
  }
  @media (max-width: 768px) {
    width: 150px;
    max-width: none;
    height: auto;
  }
`;
