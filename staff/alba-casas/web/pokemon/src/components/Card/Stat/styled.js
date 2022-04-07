import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  gap: 10px;
  font-weight: 400;
`;

export const Title = styled.span`
  font-weight: 700;
`;
