import styled from "styled-components";
import traveler from "../../assets/img/traveler.png";

export const Container = styled.div`
  background: url(${traveler}) no-repeat left top,
    linear-gradient(
      270.31deg,
      rgba(0, 0, 0, 0.6) 0.28%,
      rgba(0, 0, 0, 0.15) 49.5%,
      rgba(0, 0, 0, 0.6) 99.75%
    );
  background-size: 100% 100%;
  color: var(--gray-0);
  height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-family: "Acme", sans-serif;
  font-size: 30px;
  letter-spacing: 2px;
`;

export const Phrase = styled.p`
  margin: 5px 0;
  margin-top: 20px;
  font-family: "Righteous", cursive;
  font-size: 16px;
  text-align: center;
`;

export const DivButton = styled.div`
  width: 100%;
  padding: 0 20px;

  p {
    margin: 5px 0;
    font-family: "Righteous", cursive;
    font-size: 16px;
    text-align: center;
  }
`;
