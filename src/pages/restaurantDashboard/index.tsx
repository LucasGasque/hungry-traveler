import NavBar from "../../components/navBar";
import { useLogin } from "../../providers/login";
import { Redirect, useParams } from "react-router";
import MenuBottom from "../../components/menuBottom";
import {
  Container,
  Description,
  HeaderDiv,
  Image,
  Menu,
  RestaurantInfo,
  ScoreDiv,
  TypeHour,
} from "./style";
import { FaHeart } from "react-icons/fa";
import { Rating, Stack } from "@mui/material";
import { useRestaurants } from "../../providers/restaurants";
import { useEffect, useState } from "react";
import { RestaurantsData } from "../../types";

const RestaurantDashboard = () => {
  const { token } = useLogin();
  const { restaurants } = useRestaurants();
  const params = useParams() as any;
  const [restaurante, setRestaurante] = useState<RestaurantsData>(
    {} as RestaurantsData
  );

  useEffect(
    () =>
      setRestaurante(
        restaurants.find(
          (restaurant) => restaurant.id.toString() === params.id
        ) || ({} as RestaurantsData)
      ),
    [restaurants]
  );

  return (
    <>
      {token ? (
        <Container>
          <NavBar />
          <Image
            style={{
              backgroundImage: `url(${restaurante.img})`,
              backgroundSize: "100% 100%",
            }}
          >
            <HeaderDiv>
              <h2>Restaurante</h2>
              <FaHeart />
            </HeaderDiv>
            <h1>{restaurante.name}</h1>
          </Image>
          <RestaurantInfo>
            <h1>Descrição</h1>
            <Description>{restaurante.description}</Description>
            <TypeHour>
              <h3>{restaurante.type}</h3>
              <h3>
                {/* {restaurante.businessHours.open}:00h às{" "}
                {restaurante.businessHours.close}:00h */}
              </h3>
            </TypeHour>
            <ScoreDiv>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
              </Stack>
              <h3>Dê sua nota</h3>
            </ScoreDiv>
          </RestaurantInfo>
          <Menu>
            {/* {restaurante.menu.map((dish) => (
              <CardFood />
            ))} */}
          </Menu>
          <MenuBottom />
        </Container>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default RestaurantDashboard;
