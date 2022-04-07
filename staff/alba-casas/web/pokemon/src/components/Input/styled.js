import styled from "styled-components";

export const InputStyle = styled.input`
  border: none;
  padding: 8px 16px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.veryLightGray};
  outline: none;
  width: 100%;
`;
