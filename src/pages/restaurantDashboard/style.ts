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
    color: var(--gray-0);
    text-align: center;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    align-items: center;
    height: 310px;

    h1 {
      width: 90%;
      max-width: 900px;
      text-align: left;
    }
  }
`;

export const PositionDiv = styled.div`
  width: 100%;
  position: absolute;

  top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;

  @media (min-width: 768px) {
    top: 240px;
    padding-bottom: 0;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  h2 {
    color: var(--gray-0);
  }

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

    svg {
      position: static;
    }
  }
`;

export const RestaurantInfo = styled.div`
  width: 95%;
  background-color: #ffffff;
  border-radius: 10px 10px 0px 0px;
  border: 15px solid var(--gray-20);

  h1 {
    color: var(--gray-100);
    margin: 20px;
  }

  @media (min-width: 768px) {
    max-width: 900px;
  }
`;

export const Description = styled.p`
  color: var(--gray-50);
  margin: 20px;
`;

export const TypeHour = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--gray-50);
  margin: 20px;

  h3 {
    width: 50%;
  }

  h3:nth-child(2) {
    text-align: right;
  }
`;

export const ScoreDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;

  h3 {
    color: var(--gray-50);
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: var(--gray-20);

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;
