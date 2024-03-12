import styled from "styled-components";

export const ContainerPagination = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem 0;
`;
export const Pages = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  p {
    margin: 0;
  }
`;
export const PagesControl = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
export const ButtonPagination = styled.button`
  height: 1.3rem;
  width: 2.5rem;
`;
