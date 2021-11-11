import { useHistory } from "react-router";
import { Container, DivButton, Phrase, Title } from "./style";
import { Button } from "@mui/material";

const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <Title>Hungry Traveler</Title>
      <Phrase>
        O jeito mais fácil de pedir delivery de comida e fazer mercado
      </Phrase>
      <DivButton>
        <Button
          color="primary"
          variant="contained"
          sx={{
            width: "100%",
            height: "45px",
            padding: "0",
            textTransform: "none",
            fontFamily: "Righteous, cursive",
            borderRadius: "8px",
          }}
          onClick={() => {
            history.push("/login");
          }}
        >
          Entrar
        </Button>
        <p>ou</p>
        <Button
          color="secondary"
          variant="contained"
          sx={{
            width: "100%",
            height: "45px",
            padding: "0",
            textTransform: "none",
            fontFamily: "Righteous, cursive",
            borderRadius: "8px",
          }}
          onClick={() => {
            history.push("/register");
          }}
        >
          Registrar-se
        </Button>
      </DivButton>
    </Container>
  );
};

export default Home;
