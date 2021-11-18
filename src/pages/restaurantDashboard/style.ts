import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-20);
`;

export const Image = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  h1 {
    text-align: center;
    color: #ffffff;
    font-size: 26px;
    font-family: "Roboto", sans-serif;
  }
  h3 {
    font-size: 16px;
    color: #ffffff;
    font-family: "Righteous", sans-serif;
    letter-spacing: 1.5px;
  }

  @media (min-width: 768px) {
    align-items: center;
    height: 310px;
    padding-top: 50px;

    h1 {
      width: 90%;
      max-width: 900px;
      text-align: left;
    }
  }
`;

export const PositionDiv = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
  background-color: #ffffff;
  transform: translatey(-90px);
  margin: 0 auto;
  border-radius: 10px;
  padding: 15px;

  @media (min-width: 768px) {
    top: 240px;
    padding-bottom: 0;
    max-width: 900px;
    transform: translatey(-130px);
    padding: 0;
    gap: 25px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffffff;
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 40px;

  svg {
    position: absolute;
    right: 20px;
    color: var(--primary);
    width: 25px;
    height: 25px;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 900px;
    margin-bottom: 20px;

    svg {
      position: static;
    }
    > :last-child {
      cursor: pointer;
    }
  }
`;

export const RestaurantInfo = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 15px;

  > h3 {
    font-size: 20px;
    font-weight: bold;
    color: var(--gray-100);
    font-family: "Roboto", sans-serif;
  }

  p {
    font-size: 12px;
    color: var(--gray-50);
  }

  @media (min-width: 768px) {
    max-width: 900px;
    border-radius: 10px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  }
`;

export const Description = styled.p`
  color: var(--gray-50);
  margin: 20px;
  h3 {
    color: var(--gray-50);
  }
`;

export const TypeHour = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--gray-50);

  p {
    font-size: 14px;
    font-weight: 500;
  }

  p:last-child {
    text-align: right;
  }
`;

export const ScoreDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: var(--gray-50);
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ffffff;
`;
