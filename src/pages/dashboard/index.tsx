import NavBar from "../../components/navBar";
import { Container, Title } from "./style";
import { useLogin } from "../../providers/login";
import { Redirect } from "react-router";
import MenuBottom from "../../components/menuBottom";
import Map from "../../components/map";
import Favorites from "../../components/favorites";
import { useFavorites } from "../../providers/favorites";

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
          <Map />
          <Favorites />
          <MenuBottom />
        </Container>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Dashboard;
