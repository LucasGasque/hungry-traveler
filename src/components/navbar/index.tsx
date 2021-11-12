import { MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { useLogin } from "../../providers/login";
import { useHistory } from "react-router";
import { Header, IconsDiv } from "./style";

const NavBar = () => {
  const { logout } = useLogin();
  const history = useHistory();
  return (
    <Header>
      <h1>Hungry Traveler</h1>
      <div>
        <IconsDiv>
          <MdLocationOn onClick={() => history.push("/dashboard")} />
          <p>Mapa</p>
        </IconsDiv>
        <IconsDiv>
          <FaUser onClick={() => history.push("/favorites")} />
          <p>Favoritos</p>
        </IconsDiv>
        <IconsDiv>
          <IoMdLogOut onClick={() => logout()} />
          <p>Sair</p>
        </IconsDiv>
      </div>
    </Header>
  );
};

export default NavBar;
