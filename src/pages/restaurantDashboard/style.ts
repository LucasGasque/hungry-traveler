import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.div`
  width: 100%;
  height: 40vh;

  h1 {
    color: var(--gray-0);
    text-align: center;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    color: var(--gray-0);
  }

  svg {
    color: var(--primary);
    width: 25px;
    height: 25px;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const RestaurantInfo = styled.div``;

export const Description = styled.p``;

export const TypeHour = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ScoreDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
