import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;

  background: ${({ theme }) => theme.colors.background};
`;

export const Grid = styled.div`
  max-width: 980px;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  padding-top: 50px;
`;
