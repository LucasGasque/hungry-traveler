import NavBar from "../../components/navbar";
import { Title } from "../dashboard/style";
import { Container } from "./style";
import { useLogin } from "../../providers/login";
import { Redirect } from "react-router";
import MenuBottom from "../../components/menubottom";

const Favorites = () => {
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

export default Favorites;
