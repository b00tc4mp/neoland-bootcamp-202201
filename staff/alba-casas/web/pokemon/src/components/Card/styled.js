import styled from "styled-components";
import { getCssBackgroundByType } from "./utils";

export const Pokeball = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 0;
  top: 0;
  opacity: ${({ isFav }) => (isFav ? 1 : 0.5)};
  margin: 8px;
  cursor: pointer;
`;

export const Header = styled.header`
  width: 260px;
  height: 100px;
  position: absolute;
  background: radial-gradient(
    100% 338% at 0% 0%,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 8px 8px 0 0;
  ${({ type }) => getCssBackgroundByType(type)}
  z-index: 1;
`;

export const StyledCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 260px;
  height: 360px;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
`;

export const PokemonImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center;
`;

export const CircleBackground = styled.div`
  width: 120px;
  height: 120px;
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(255, 255, 255, 0) 0%,
      rgba(211, 211, 211, 0.8) 100%
    ),
    ${({ theme }) => theme.colors.secondary};
  border-radius: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 40px;
`;

export const Container = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 2;
`;

export const PokemonName = styled.figcaption`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
`;

export const TypeCircle = styled.span`
  display: block;
  border-radius: 100px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  ${({ type }) => getCssBackgroundByType(type)}
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  gap: 10px;
  font-weight: 700;
`;

export const Footer = styled.footer`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  margin-top: auto;
  margin-bottom: 24px;
`;
