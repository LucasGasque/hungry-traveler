import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 136px);

  @media (min-width: 768px) {
    height: calc(100vh - 68px);
  }
`;
