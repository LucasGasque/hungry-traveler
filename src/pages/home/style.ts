import styled from "styled-components";
import travelerS from "../../assets/img/travelerS.png";
import travelerDesktop from "../../assets/img/travelerDesktop.png";

export const Container = styled.div`
  background-image: linear-gradient(
      270.31deg,
      rgba(12, 12, 12, 0.85),
      rgba(12, 12, 12, 0.85),
      rgba(12, 12, 12, 0.85),
      rgba(12, 12, 12, 0.85)
    ),
    url(${travelerS});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  color: var(--gray-0);
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: space-between;
    background-image: linear-gradient(
        270.31deg,
        rgba(12, 12, 12, 0.85),
        rgba(12, 12, 12, 0.85),
        rgba(12, 12, 12, 0.85),
        rgba(12, 12, 12, 0.85)
      ),
      url(${travelerDesktop});
  }
`;

export const Title = styled.h1`
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

export const PhraseMobile = styled.p`
  margin: 30px 0;
  font-family: "Righteous", cursive;
  font-size: 16px;
  text-align: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const PhraseDesktop = styled.p`
  margin: 5px 0;
  margin-top: 20px;
  font-family: "Righteous", cursive;
  font-size: 16px;
  text-align: center;
  display: none;

  @media (min-width: 768px) {
    display: inline;
  }
`;

export const DivButton = styled.div`
  width: 90%;
  max-width: 320px;
  padding: 0 20px;

  p {
    margin: 5px 0;
    font-family: "Righteous", cursive;
    font-size: 16px;
    text-align: center;
  }

  h1 {
    font-size: 26px;
    text-align: center;
    display: none;
  }

  @media (min-width: 768px) {
    background: rgba(0, 0, 0, 0.6);
    max-width: 465px;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 1rem;
    margin: auto auto;
    padding: 4rem 3rem;
    border-radius: 10px;

    h1 {
      display: inline;
    }
  }
`;
