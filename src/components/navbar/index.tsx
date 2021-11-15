import { useLogin } from "../../providers/login";
import { useHistory } from "react-router";
import { ButtonsDiv, Header, Title } from "./style";
import { FaHome, FaUser } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

const NavBar = () => {
  const { logout, token } = useLogin();
  const history = useHistory();

  const colored: any = {
    "/": 1,
    "/login": 2,
    "/register": 3,
    "/dashboard": 1,
    "/favorites": 2,
  };

  const dashboardFunc = () => {
    history.push("/dashboard");
  };

  const favoritesFunc = () => {
    history.push("/favorites");
  };

  const logoutFunc = () => {
    logout();
  };

  return (
    <>
      {token ? (
        <Header>
          <Title>
            <span>Hungry</span> Traveler
          </Title>
          <ButtonsDiv num={colored[history.location.pathname]}>
            <button onClick={() => dashboardFunc()}>
              <FaMapMarkerAlt />
              Mapa
            </button>
            <button onClick={() => favoritesFunc()}>
              <FaHeart />
              Favoritos
            </button>
            <button onClick={() => logoutFunc()}>
              <IoMdExit />
              Sair
            </button>
          </ButtonsDiv>
        </Header>
      ) : (
        <Header>
          <Title>
            <span>Hungry</span> Traveler
          </Title>
          <ButtonsDiv num={colored[history.location.pathname]}>
            <button onClick={() => dashboardFunc()}>
              <FaHome />
              Home
            </button>
            <button onClick={() => favoritesFunc()}>
              <FaUser />
              Login
            </button>
            <button onClick={() => logoutFunc()}>
              <MdAssignment />
              Cadastro
            </button>
          </ButtonsDiv>
        </Header>
      )}
    </>
  );
};

export default NavBar;
