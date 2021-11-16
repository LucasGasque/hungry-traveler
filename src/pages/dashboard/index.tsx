import NavBar from "../../components/navBar";
import { Container, Title } from "./style";
import { useLogin } from "../../providers/login";
import { Redirect } from "react-router";
import MenuBottom from "../../components/menuBottom";

const Dashboard = () => {
  const { token } = useLogin();

  return (
    <>
      {token ? (
        <Container>
          <NavBar />
          <Title>
            <span>Hungry&nbsp;</span>Traveler
          </Title>
          <MenuBottom />
        </Container>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Dashboard;
