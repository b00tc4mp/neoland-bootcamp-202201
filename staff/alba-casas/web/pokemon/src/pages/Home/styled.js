import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;

  background: ${({ theme }) => theme.colors.background};
`;

export const Main = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
  max-width: 980px;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  padding-top: 50px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
