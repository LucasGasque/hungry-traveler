import styled from "styled-components";
import travelerS from "../../assets/img/travelerS.png";
import traveler from "../../assets/img/traveler.png";

export const Container = styled.div`
  height: auto;
  background-image: linear-gradient(
      270.31deg,
      rgba(0, 0, 0, 0.6) 0.28%,
      rgba(0, 0, 0, 0.15) 49.5%,
      rgba(0, 0, 0, 0.6) 99.75%
    ),
    url(${travelerS});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
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

  .css-k4qjio-MuiFormHelperText-root.Mui-error {
    font-size: 10px;
    margin: 0;
    margin-left: 2px;
  }

  @media (min-width: 768px) {
    height: 100vh;
    justify-content: space-between;
    background-image: linear-gradient(
        rgba(12, 12, 12, 0.85),
        rgba(12, 12, 12, 0.85),
        rgba(12, 12, 12, 0.85),
        rgba(12, 12, 12, 0.85)
      ),
      url(${traveler});
    padding-bottom: 0;
  }
`;

export const Title = styled.h1`
  margin-top: 20px;
  padding: 40px 0;
  font-family: "Acme", sans-serif;
  font-size: 30px;
  letter-spacing: 2px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const FormTitle = styled.h1`
  color: var(--primary);
  font-family: "Righteous", cursive;
  margin-top: 1rem;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    color: #ffffff;
  }
`;

export const Form = styled.form`
  width: 80%;
  max-width: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 1rem;
  padding: 20px;
  padding-top: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  box-sizing: border-box;

  .css-hgkgee-MuiInputBase-root-MuiOutlinedInput-root {
    height: 45px;
    vertical-align: middle;
  }

  .css-xewhx1-MuiFormLabel-root-MuiInputLabel-root {
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
    background: rgba(0, 0, 0, 0.6);
    border: none;
    margin: auto auto;
    border-radius: 10px;
    padding: 1rem 3rem;
  }
`;
