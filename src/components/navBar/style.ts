import styled from "styled-components";

export interface ContProps {
  num: number;
}

export const Header = styled.header`
  background: var(--black-95);
  width: 100%;
  height: 68px;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0;
    left:0;
    right: 0;
    z-index: 10;
  }
`;

export const ButtonsDiv = styled.div<ContProps>`
  margin-right: 4rem;
  display: flex;
  justify-content: space-around;

  button {
    width: 108px;
    height: 42px;
    border-radius: 8px;
    background: var(--white-50);
    color: var(--gray-50);
    margin-left: 1rem;
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
export const Title = styled.h1`
  font-family: "Acme", sans-serif;
  font-size: 24px;
  letter-spacing: 2px;
  color: var(--gray-0);
  margin-left: 4rem;

  span {
    font-size: 30px;
    color: var(--primary);
  }
`;
