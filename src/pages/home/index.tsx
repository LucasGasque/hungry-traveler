import { useHistory } from "react-router";
import { Container, DivButton } from "./style";
import Map from "../../components/map";

const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <h1>Hungry Traveler</h1>
      <p>O jeito mais fácil de pedir delivery de comida e fazer mercado</p>
      <DivButton>
        <button
          onClick={() => {
            history.push("/login");
          }}
        >
          Entrar
        </button>
        <p>ou</p>
        <button
          onClick={() => {
            history.push("/register");
          }}
        >
          Registrar-se
        </button>
      </DivButton>
    </Container>
  );
};

export default Home;
