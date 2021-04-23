import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    transform: translateX(-600px);
  }
  100% {
    transform: translateX(0px)
  }
`;

const rollIn = keyframes`
  0% {
    transform: translateX(-200px) rotate(360deg);
  }
  100% {
    transform: translateX(0px) rotate(0deg);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
  }

  .content {
    width: 50%;
    min-height: 40vh;
    padding: 40px 0 80px 0;

    @media (max-width: 768px) {
      width: 100%;
      max-width: 600px;
      min-height: 0;
      padding: 40px 20px;
    }

    .title {
      transform: translateX(-600px);
      animation: ${slideIn} 300ms 600ms ease-in-out forwards;

      @media (max-width: 768px) {
        text-align: center;
      }
    }

    .subtitle {
      transform: translateX(-600px);
      animation: ${slideIn} 300ms 1000ms ease-in-out forwards;

      @media (max-width: 768px) {
        text-align: center;
      }
    }
  }

  .links {
    margin-top: 20px;
    display: flex;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .link {
    position: relative;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    cursor: pointer;
    box-shadow: 8px 8px 24px #c4c4c4, -8px -8px 24px #ffffff;
    transform: translateX(-200px) rotate(360deg);
    animation: ${rollIn} 1000ms 1000ms ease-in-out forwards;
    transition: box-shadow 150ms ease-in-out;
    border-radius: 50%;

    &:first-child {
      animation: ${rollIn} 1000ms 1200ms ease-in-out forwards;
    }

    &.linkedin {
      display: flex;
      justify-content: center;
      align-content: center;
      padding: 4px 0 0 2px;
    }

    &.linkedin::before {
      content: "";
      width: 40px;
      height: 40px;
      position: absolute;
      top: 0;
      left: 0;
      background: #313131;
      border-radius: 50%;
    }
  }

  .projects {
    width: 50%;
    height: 40vh;
    min-height: 40vh;

    @media (max-width: 768px) {
      width: 100%;
      max-width: 600px;
      min-height: 0;
      padding: 0;
    }
  }
`;
