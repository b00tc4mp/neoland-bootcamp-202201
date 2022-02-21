import styled from "styled-components";

export const SideBar = styled.div`
  width: 280px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.white};
  margin-right: 200px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 32px;
`;

export const Logo = styled.img`
  width: 220px;
  height: 80px;
`;

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
