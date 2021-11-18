import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  z-index: 10;
  background-color: #fff;
  position: absolute;
  display: grid;
  top: 100px;
  right: 4rem;
  place-items: center;
  border-radius: 10px;
  width: 40%;

  @media (max-width: 768px) {
    top: 10px;
    right: 5%;
    width: 90%;
    margin: 0 auto;
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
