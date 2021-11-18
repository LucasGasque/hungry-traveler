import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 328px;
  height: 170px;
  font-family: "Inter", sans-serif;
  margin: 10px;
  border-radius: 8px;

  @media (max-width: 320px) {
    width: 320px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 170px;
  border-radius: 8px;
`;

export const Figure = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 71%,
    rgba(0, 0, 0, 1) 100%
  );
  z-index: 20;
  position: absolute;
  border-radius: 8px;
  top: 0;
`;

export const Name = styled.span`
  position: absolute;
  color: var(--gray-0);
  font-size: 23px;
  width: 150px;
  z-index: 21;
  width: 150px;
  font-weight: bolder;
  left: 5%;
  top: 10%;
  text-shadow: 2px 7px 11px rgba(0, 0, 0, 0.73);
`;

export const Price = styled.span`
  position: absolute;
  color: var(--gray-0);
  font-size: 16px;
  z-index: 21;
  font-weight: bolder;
  left: 5%;
  bottom: 10%;
  text-shadow: 2px 7px 11px rgba(0, 0, 0, 0.73);
`;

export const Description = styled.span`
  position: absolute;
  color: var(--gray-0);
  font-size: 12.1px;
  z-index: 23;
  right: 5%;
  top: 10%;
  width: 115px;
  height: 133.8px;
  text-align: right;
  overflow: hidden;
`;
