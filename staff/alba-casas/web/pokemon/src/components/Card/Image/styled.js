import styled from "styled-components";

export const PokemonImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center;
  user-select: none;
`;

export const CircleBackground = styled.div`
  width: 120px;
  height: 120px;
  background: ${({ theme }) => theme.colors.background};
  border: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 40px;
  user-select: none;
`;
