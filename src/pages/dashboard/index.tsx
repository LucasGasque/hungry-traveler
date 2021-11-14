import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import NavBar from "../../components/navbar";
import { Container } from "./style";

const Dashboard = () => {
  return (
    <Container>
      <NavBar
        icon1={FaMapMarkerAlt}
        icon2={FaHeart}
        icon3={IoMdExit}
        text1="Mapa"
        text2="Favoritos"
        text3="Sair"
      />
    </Container>
  );
};

export default Dashboard;
