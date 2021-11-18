import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  z-index: 10;
  background-color: #fff;
  display: grid;
  place-items: center;
  border-radius: 10px;
  max-width: 365px;
  width: 98%;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%);

  @media (min-width: 768px) {
    transform: translateX(0);
    left: 410px;
    top: 100px;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 45px;
  background-color: var(--gray-0);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  input {
    background-color: var(--gray-0);
    width: 100%;
    padding-left: 10px;
  }

  button {
    color: var(--gray-50);
    background-color: transparent;
    display: grid;
    place-items: center;
    padding-right: 10px;
  }
`;
