import { css } from "styled-components";

const gradient = `radial-gradient(
  100% 338% at 0% 0%,
  rgba(255, 255, 255, 0.3) 0%,
  rgba(255, 255, 255, 0) 100%
)`;

export const getCssBackgroundByType = (type) => {
  return css`
    background: ${gradient},
      ${({ theme }) => theme.colors.types[type] || theme.colors.lightGray};
  `;
};
