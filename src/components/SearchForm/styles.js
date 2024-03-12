import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    background-color: slategray;
    width: 100%;
    height: 5rem;
  `}
`;

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a svg {
    margin-top: 3.8px;
    color: black;
    font-size: 26px;
  }
`;
export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 0.3rem;
  input {
    padding: 3px;
    outline: none;
    border: none;
    border-radius: 4px;
    font-size: 16px;
  }
`;
