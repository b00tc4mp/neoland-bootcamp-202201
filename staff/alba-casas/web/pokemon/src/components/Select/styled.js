import styled from "styled-components";

export const StyledSelect = styled.select`
  cursor: pointer;
  border: none;
  width: 100%;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.veryLightGray};
  border-radius: 100px;
  appearance: none;
  background-image: url("data:image/svg+xml,<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'><path d='m0,6l12,12l12,-12l-24,0z'/><path fill='none' d='m0,0l24,0l0,24l-24,0l0,-24z'/></svg>");
  background-repeat: no-repeat;
  background-size: 12px;
  background-position-y: center;
  background-position-x: calc(100% - 16px);
`;
