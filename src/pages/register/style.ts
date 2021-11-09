import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  grid-gap: 1rem;

  p {
    color: var(--gray-100);
  }

  span {
    color: var(--primary);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 1rem;
  padding: 20px;
  padding-top: 0;
  background: #fcfcfc;
  border: 3px solid #f5f5f5;
  border-radius: 5px;
  box-sizing: border-box;

  h1 {
    color: var(--primary);
    margin-top: 1rem;
    font-size: 22px;
    font-weight: bold;
  }
`;

// export const StyledTextField = styled(TextField)``;
