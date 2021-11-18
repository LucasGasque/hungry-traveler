import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 328px;
  height: 170px;
  font-family: "Roboto", sans-serif;
  margin: 10px;
  border-radius: 8px;

  @media (max-width: 320px) {
    width: 276px;
  }
  @media (min-width: 768px) {
    width: 400px;
    max-width: 50%;
  }
`;

export const Image = styled.img`
  width: 73%;
  height: 170px;
  border-radius: 8px;
  object-fit: cover;
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
  font-size: 20px;
  width: calc(100% - 145px);
  max-height: 65%;
  overflow-y: hidden;
  z-index: 21;
  font-weight: bold;
  left: 5%;
  top: 10%;
  text-shadow: 2px 7px 11px rgba(0, 0, 0, 0.73);
`;

export const Price = styled.span`
  position: absolute;
  color: var(--gray-0);
  font-size: 14px;
  z-index: 21;
  font-weight: bold;
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
