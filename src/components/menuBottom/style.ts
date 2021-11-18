import styled from "styled-components";

export interface ContProps {
  num: number;
}

export const Footer = styled.footer`
  background: var(--black-95);
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ButtonsDiv = styled.div<ContProps>`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    width: 108px;
    height: 42px;
    border-radius: 8px;
    background: var(--white-50);
    color: var(--gray-50);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 12px;
    cursor: pointer;
    margin: 0 2px;

    svg {
      width: 20px;
      height: 24px;
    }
  }

  button:hover {
    background: #fff;
    color: var(--primary);
  }

  button:active {
    transform: scale(95%);
  }

  button:nth-child(${(props) => props.num}) {
    background: #fff;
    color: var(--primary);
  }
`;
