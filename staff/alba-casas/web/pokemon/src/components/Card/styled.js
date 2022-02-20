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
  user-select: none;
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
  z-index: 1;
  ${({ type }) => getCssBackgroundByType(type)};
`;

export const StyledCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 260px;
  height: 360px;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
`;

export const Container = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 2;
`;

export const PokemonName = styled.figcaption`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.black};
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
  background: ${({ theme, type }) => theme.colors.types[type]};
  letter-spacing: 1px;
`;

export const Footer = styled.footer`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  margin-top: auto;
  margin-bottom: 24px;
`;
