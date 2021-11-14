import { useHistory } from "react-router";
import {
  Container,
  DivButton,
  PhraseMobile,
  PhraseDesktop,
  Title,
} from "./style";
import { Button } from "@mui/material";
import NavBar from "../../components/navbar";
import { FaHome, FaUser } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";

const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <NavBar
        icon1={FaHome}
        icon2={FaUser}
        icon3={MdAssignment}
        text1="Home"
        text2="Login"
        text3="Cadastro"
      />
      <Title>Hungry Traveler</Title>
      <PhraseMobile>
        O jeito mais fácil de pedir delivery de comida e fazer mercado
      </PhraseMobile>
      <DivButton>
        <h1>Escolha pelo caminho mais rápido</h1> <br />
        <PhraseDesktop>
          O jeito mais fácil de pedir delivery de comida e fazer mercado
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
