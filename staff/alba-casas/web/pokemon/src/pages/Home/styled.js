import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  background: ${({ theme }) => theme.colors.background};
`;

export const Grid = styled.div`
  padding-top: 50px;
  max-width: 980px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
`;
