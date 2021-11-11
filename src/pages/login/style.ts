import styled from "styled-components";
import traveler from "../../assets/img/traveler.png";

export const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(
      270.31deg,
      rgba(0, 0, 0, 0.6) 0.28%,
      rgba(0, 0, 0, 0.15) 49.5%,
      rgba(0, 0, 0, 0.6) 99.75%
    ),
    url(${traveler});
  background-size: 100% 100%;
  color: var(--gray-0);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  p {
    color: var(--gray-50);
    font-size: 12px;
    font-family: "Righteous", cursive;
  }

  span {
    color: var(--primary);
  }
`;

export const Form = styled.form`
  background: rgba(0, 0, 0, 0.5);
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 1rem;
  padding: 20px;
  padding-top: 0;
  border-radius: 5px;
  box-sizing: border-box;

  .css-glmvsh-MuiInputBase-root-MuiOutlinedInput-root {
    height: 45px;
    vertical-align: middle;
  }

  .css-1n8hauo-MuiFormLabel-root-MuiInputLabel-root {
    font-family: "Righteous", cursive;
    font-size: 14px;
    color: var(--gray-50);
  }

  .css-1vy6t9p-MuiInputBase-root-MuiOutlinedInput-root {
    height: 45px;
  }
`;
