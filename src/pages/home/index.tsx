import { useHistory } from "react-router";
import Map from "../../components/map";
import {
  Container,
  DivButton,
  PhraseMobile,
  PhraseDesktop,
  Title,
} from "./style";
import { Button } from "@mui/material";
import NavBar from "../../components/navBar";

const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <NavBar />
      <Title>Hungry Traveler</Title>
      <PhraseMobile>
        Todos os seus restaurantes favoritos ao redor do mundo em um só lugar!
      </PhraseMobile>
      <DivButton>
        <h1>Escolha pelo caminho mais rápido</h1> <br />
        <PhraseDesktop>
          Todos os seus restaurantes favoritos ao redor do mundo em um só lugar!
        </PhraseDesktop>
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
