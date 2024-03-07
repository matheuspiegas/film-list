import styled from "styled-components";

export const Container = styled.div`
  /* height: 100vh; */
  background-color: rgba(1, 1, 1, 0.1);
`;
export const Card = styled.div`
  @media (max-width: 520px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 0.5rem;
    gap: 0.3rem;
  }
`;
export const Info = styled.div`
  span {
    font-weight: 400;
  }
  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const Poster = styled.img`
  max-width: 100%;
  height: auto;
  @media (max-width: 520px) {
    max-width: 30%;
    width: 100%;
    height: 100%;
  }
`;
