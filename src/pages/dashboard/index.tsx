import NavBar from "../../components/navbar";
import { Container } from "./style";
import { useLogin } from "../../providers/login";
import { Redirect } from "react-router";

const Dashboard = () => {
  const { token } = useLogin();

  return (
    <>
      {token ? (
        <Container>
          <NavBar />
        </Container>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Dashboard;
