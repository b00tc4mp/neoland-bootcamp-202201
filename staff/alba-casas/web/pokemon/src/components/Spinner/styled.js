import styled from "styled-components";

const Spinner = styled.div`
  width: 32px;
  height: 32px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 2px solid;
  animation: frames 0.8s linear 0s infinite;

  &:after {
    content: "";
    position: absolute;
    width: 32px;
    height: 16px;
    background-color: red;
    border-bottom: 3px solid;
    top: -4px;
  }

  &:before {
    content: "";
    position: absolute;
    background-color: #fff;
    width: 5px;
    height: 5px;
    border: 3px solid;
    border-radius: 50%;
    bottom: 9px;
    right: 9px;
    z-index: 1;
  }

  /* AnimationFrames */
  @keyframes frames {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
