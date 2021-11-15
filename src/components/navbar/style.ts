import styled from "styled-components";

export interface ContProps {
  num: number;
}

export const Header = styled.header`
  background: rgba(51, 51, 51, 0.9);
  width: 100%;
  height: 68px;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ButtonsDiv = styled.div<ContProps>`
  width: 35%;
  margin-right: 4rem;
  display: flex;
  justify-content: space-around;

  button {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    background: var(--gray-20);
    color: var(--gray-50);
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 12px;
    cursor: pointer;

    svg {
      width: 20px;
      height: 24px;
    }
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
