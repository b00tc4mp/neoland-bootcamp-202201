import styled from "styled-components";
import Input from "../Input";

export const SideBar = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  width: 280px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 32px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
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

export const StyledInput = styled(Input)`
  margin-top: 24px;
  margin-bottom: 24px;
`;
