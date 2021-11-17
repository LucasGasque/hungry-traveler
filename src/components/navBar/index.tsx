import { useLogin } from "../../providers/login";
import { useHistory } from "react-router";
import { ButtonsDiv, Header, Title } from "./style";
import { FaHome, FaUser } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { useFavorites } from "../../providers/favorites";

const NavBar = () => {
  const { logout, token } = useLogin();
  const history = useHistory();
  const { handleFavorites} = useFavorites()

  const colored: any = {
    "/": 1,
    "/login": 2,
    "/register": 3,
    "/dashboard": 1,
    "/favorites": 2,
  };

  return (
    <>
      {token ? (
        <Header>
          <Title>
            <span>Hungry</span> Traveler
          </Title>
          <ButtonsDiv num={colored[history.location.pathname]}>
            <button onClick={() => history.push("/dashboard")}>
              <FaMapMarkerAlt />
              Mapa
            </button>
            <button onClick={() => handleFavorites()}>
              <FaHeart />
              Favoritos
            </button>
            <button onClick={() => logout()}>
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
            <button onClick={() => history.push("/")}>
              <FaHome />
              Home
            </button>
            <button onClick={() => history.push("/login")}>
              <FaUser />
              Login
            </button>
            <button onClick={() => history.push("/register")}>
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
