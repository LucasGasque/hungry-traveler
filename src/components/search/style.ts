import styled from "styled-components";

export const Container = styled.div`
  min-width: 300px;
  height: 87px;
  z-index: 10;
  background-color: #fff;
  position: absolute;
  display: grid;
  place-items: center;
  border-radius: 10px;
`;

export const Box = styled.div`
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
