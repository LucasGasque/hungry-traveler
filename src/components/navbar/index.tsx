import { useLogin } from "../../providers/login";
import { useHistory } from "react-router";
import { ButtonsDiv, Header, Title } from "./style";
import { IconType } from "react-icons";

interface NavBarData {
  icon1: IconType;
  icon2: IconType;
  icon3: IconType;
  text1: string;
  text2: string;
  text3: string;
}

const NavBar = ({
  icon1: Icon1,
  icon2: Icon2,
  icon3: Icon3,
  text1,
  text2,
  text3,
}: NavBarData) => {
  const { logout } = useLogin();
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
    <Header>
      <Title>
        <span>Hungry</span> Traveler
      </Title>
      <ButtonsDiv num={colored[history.location.pathname]}>
        <button onClick={() => dashboardFunc()}>
          {Icon1 && <Icon1 />}
          {text1}
        </button>
        <button onClick={() => favoritesFunc()}>
          {Icon2 && <Icon2 />}
          {text2}
        </button>
        <button onClick={() => logoutFunc()}>
          {Icon3 && <Icon3 />}
          {text3}
        </button>
      </ButtonsDiv>
    </Header>
  );
};

export default NavBar;
