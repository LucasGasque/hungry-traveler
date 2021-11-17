import styled from "styled-components";

export interface ContProps {
  num: number;
}

export const Footer = styled.footer`
  background: rgba(51, 51, 51, 0.9);
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ButtonsDiv = styled.div<ContProps>`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0 15px;

  button {
    width: 108px;
    height: 42px;
    border-radius: 8px;
    background: var(--gray-20);
    color: var(--gray-50);
    /* margin: 0 1rem; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 12px;
    cursor: pointer;
    flex-shrink: 0;

    svg {
      width: 20px;
      height: 24px;
    }
  }

  button:hover{
    background: #fff;
    color: var(--primary);
  }

  button:active{
    transform: scale(95%);
  }

  button:nth-child(${(props) => props.num}) {
    background: #fff;
    color: var(--primary);
  }
`;
