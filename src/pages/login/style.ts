import styled from "styled-components";
import travelerS from "../../assets/img/travelerS.png";
import traveler from "../../assets/img/traveler.png";

export const Container = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
      270.31deg,
      rgba(12, 12, 12, 0.85),
      rgba(12, 12, 12, 0.85),
      rgba(12, 12, 12, 0.85),
      rgba(12, 12, 12, 0.85)
    ),
    url(${travelerS});
  background-size: 100% 100%;
  color: var(--gray-0);
  display: flex;
  justify-content: center;
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
    cursor: pointer;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  font-family: "Acme", sans-serif;
  font-size: 30px;
  letter-spacing: 2px;
  color: var(--gray-0);
  margin: 30px 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Form = styled.form`
  max-width: 464px;
  width: 95%;
  height: 428px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  padding-top: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
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

  .css-jxzsrg-MuiFormLabel-root-MuiInputLabel-root {
    background: #fff;
    padding: 0 10px;
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    margin: auto auto;
  }
`;
