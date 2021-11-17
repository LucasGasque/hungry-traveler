import styled, { keyframes } from "styled-components";

const appearFromTop = keyframes`
from {
  transform: translateY(-10px);
  opacity: 0;
},
to {
  transform: translateY(0);
  opacity: 1;
}
`;

interface ArrowDivData {
  isVisible: boolean;
}

export const Container = styled.div``;

export const MainContent = styled.div`
  display: flex;
  width: 90%;
  max-width: 375px;
  height: 125px;
  border-radius: 5px;
  background-color: #ffffff;
  border: 2px solid var(--gray-0);

  box-sizing: border-box;
  img {
    border-radius: 5px 0 0 5px;
    width: 115px;
    height: 100%;
  }
`;

export const ArrowDiv = styled.div<ArrowDivData>`
  transition-duration: 0.4s;
  transform: rotate(${(props) => (props.isVisible ? "180deg" : "0")});
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0 5px 5px 0;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  box-sizing: border-box;

  p:nth-child(1n + 2) {
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    color: var(--gray-50);
  }
  p:nth-child(2) {
    font-size: 14px;
  }
  p:last-child {
    font-size: 12px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  > div:last-child {
    color: var(--primary);
  }
`;

export const RestaurantTitle = styled.p`
  font-size: 18px;
  color: var(--gray-100);
  font-family: "Righteous";
`;

export const Details = styled.div`
  margin-top: 10px;
  width: 90%;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  border-radius: 5px;
  background-color: #ffffff;
  border: 3px solid var(--gray-0);
  padding: 15px 20px;
  animation: ${appearFromTop} 0.5s ease-in;
  font-family: "Roboto";
  p {
    width: 100%;
    font-size: 12px;
    color: var(--gray-50);
  }
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
