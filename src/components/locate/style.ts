import styled from "styled-components";

export const Button = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 10px;
  bottom: 20px;
  border: none;
  background-color: transparent;
  z-index: 9;

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
