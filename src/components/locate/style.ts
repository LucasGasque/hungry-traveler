import styled from "styled-components";

export const Button = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 20px;
  top: 10%;
  border: none;
  background-color: transparent;
  z-index: 10;

  img {
    width: 100%;
  }

  :hover {
    transform: scale(105%);
  }

  :active {
    transform: scale(95%);
  }
`;
