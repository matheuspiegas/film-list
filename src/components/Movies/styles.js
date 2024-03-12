import styled from "styled-components";

export const ContainerMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
  }
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 200px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    border: 1px solid #ccc;
    width: 100%;
    flex-direction: row;
    a {
      height: 120px;
    }
    a > img {
      height: 100% !important;
      width: 80px;
      max-width: 80px !important;
      border-radius: 10px 0px 0px 10px !important;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
  a img {
    border-radius: 10px 10px 0px 0px;
    max-width: 100%;
    height: 300px;
  }
`;
export const MovieInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  padding: 0.6rem;
  gap: 0.5rem 0;
  h3 {
    font-weight: 600;
    font-size: 16px;
  }
  span {
    font-weight: normal;
    font-size: 16px;
    color: grey;
  }
  p {
    display: none;
  }
  @media (max-width: 768px) {
    gap: 0.7rem;

    span {
      color: #ccc;
      font-size: 10px;
    }
    p {
      display: block;
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
