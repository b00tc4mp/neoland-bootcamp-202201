import { css } from "styled-components";

const gradient = `radial-gradient(
  100% 338% at 0% 0%,
  rgba(255, 255, 255, 0.3) 0%,
  rgba(255, 255, 255, 0) 100%
)`;

export const getCssBackgroundByType = (type) => {
  switch (type) {
    case "water":
      return css`
        background: ${gradient}, ${({ theme }) => theme.colors.types.water};
      `;
    case "fire":
      return css`
        background: ${gradient}, ${({ theme }) => theme.colors.types.fire};
      `;
    case "grass":
      return css`
        background: ${gradient}, ${({ theme }) => theme.colors.types.grass};
      `;
    case "bug":
      return css`
        background: ${gradient}, ${({ theme }) => theme.colors.types.bug};
        color: black;
      `;

    default:
      return css`
        background: ${gradient}, ${({ theme }) => theme.colors.types.normal};
      `;
  }
};
