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
    color: var(--gray-100);
    font-size: 12px;
    font-family: "Righteous", cursive;
  }

  span {
    color: var(--primary);
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    background-image: linear-gradient(
        rgba(12, 12, 12, 0.85),
        rgba(12, 12, 12, 0.85),
        rgba(12, 12, 12, 0.85),
        rgba(12, 12, 12, 0.85)
      ),
      url(${traveler});
  }
`;

export const Title = styled.h1`
  font-family: "Acme", sans-serif;
  font-size: 30px;
  letter-spacing: 2px;
  color: var(--gray-0);

  span {
    color: var(--primary);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Form = styled.form`
  width: 90%;
  max-width: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 1rem;
  padding: 20px;
  padding-top: 0;
  background: #fcfcfc;
  border: 3px solid #f5f5f5;
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

  @media (min-width: 768px) {
    background: rgba(0, 0, 0, 0.6);
    border: none;
    margin: auto auto;
    border-radius: 10px;
  }
`;
