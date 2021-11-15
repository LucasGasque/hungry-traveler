import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
  width: 100%;
  height: 68px;
  font-family: "Acme", sans-serif;
  font-size: 24px;
  letter-spacing: 2px;
  color: var(--gray-0);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(51, 51, 51, 0.9);

  span {
    font-size: 30px;
    color: var(--primary);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
