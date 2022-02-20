import { css } from "styled-components";

export const getCssBackgroundByType = (type) => {
  switch (type) {
    case "water":
      return css`
        background: radial-gradient(
            100% 338% at 0% 0%,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0) 100%
          ),
          #3899f8;
      `;
    case "fire":
      return css`
        background: radial-gradient(
            100% 338% at 0% 0%,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0) 100%
          ),
          tomato;
      `;
    case "grass":
      return css`
        background: radial-gradient(
            100% 338% at 0% 0%,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0) 100%
          ),
          #3f960a;
      `;
    case "bug":
      return css`
        background: radial-gradient(
            100% 338% at 0% 0%,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0) 100%
          ),
          #bdde6f;
        color: black;
      `;

    default:
      return css`
        background: radial-gradient(
            100% 338% at 0% 0%,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0) 100%
          ),
          #aba974;
      `;
  }
};
