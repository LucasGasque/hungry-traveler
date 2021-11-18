import styled, { keyframes } from "styled-components";

const appearFromBottom = keyframes`
from {
  opacity: 0;
  top: 110px
},
to {
  opacity: 1;
  top: 90px;
}
`;

export const Container = styled.div`
  width: 98%;
  max-width: 365px;
  z-index: 10;
  animation: ${appearFromBottom} 0.5s ease-in;
  border-radius: 10px;
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translate(-50%);

  > div:first-child {
    padding: 19px;
    background-color: var(--primary);
    border-radius: 10px 10px 0 0;
    h3 {
      color: var(--gray-0);
    }
  }
  > div:last-child {
    width: 100%;
    max-height: calc(100vh - 286px);
    overflow-y: auto;
    box-sizing: border-box;
    > div {
      background-color: var(--gray-0);
      border-radius: 0 0 10px 10px;
      max-width: 365px;
      width: 100%;
      padding: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      > p {
        font-size: 14px;
        color: var(--gray-50);
      }
    }
  }
  @media (min-width: 768px) {
    transform: translateX(0);
    left: 40px;
    top: 100px;
  }
`;
