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
  PositionDiv,
  RestaurantInfo,
  ScoreDiv,
  TypeHour,
  Content,
} from "./style";
import { FaHeart } from "react-icons/fa";
import { Stack } from "@mui/material";
import Rating from "react-rating";
import { useRestaurants } from "../../providers/restaurants";
import { useEffect, useState } from "react";
import { RestaurantsData } from "../../types";
import { useScore } from "../../providers/score";
import CardFood from "../../components/cardFood";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const RestaurantDashboard = () => {
  const { token } = useLogin();
  const { restaurants } = useRestaurants();
  const { scores, addScore } = useScore();
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

  const restaurantScore = scores
    .filter((score) => score.restaurantId.toString() === params.id)
    .map((rest) => rest.score);

  const media =
    restaurantScore.reduce((acc, note) => acc + note, 0) /
    restaurantScore.length;

  return (
    <>
      {token ? (
        <Container>
          <NavBar />
          <Image
            style={{
              backgroundImage: `url(${restaurante.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <HeaderDiv>
              <h3>Restaurante</h3>
              <FaHeart />
            </HeaderDiv>
            <h1>{restaurante.name}</h1>
          </Image>
          <Content>
            <PositionDiv>
              <RestaurantInfo>
                <h3>Descrição</h3>
                <p>{restaurante.description}</p>
                <TypeHour>
                  <p>{restaurante.type}</p>
                  <p>
                    {restaurante.businessHours &&
                      restaurante.businessHours.open}
                    :00h às{" "}
                    {restaurante.businessHours &&
                      restaurante.businessHours.close}
                    :00h
                  </p>
                </TypeHour>
                <ScoreDiv>
                  <Stack spacing={1}>
                    <Rating
                      onClick={(value: number) =>
                        addScore(value, restaurante.id)
                      }
                      fractions={2}
                      placeholderRating={media}
                      fullSymbol={
                        <AiFillStar size={"22px"} color={"#EB972A"} />
                      }
                      emptySymbol={
                        <AiOutlineStar size={"22px"} color={"#EB972A"} />
                      }
                      placeholderSymbol={
                        <AiFillStar size={"22px"} color={"#EB972A"} />
                      }
                    />
                  </Stack>
                  <p>Dê sua nota</p>
                </ScoreDiv>
              </RestaurantInfo>
              <Menu>
                {restaurante.menu &&
                  restaurante.menu.map((dish, index) => (
                    <CardFood
                      key={index}
                      name={dish.name}
                      price={dish.price}
                      img={dish.img}
                      description={dish.description}
                    />
                  ))}
              </Menu>
            </PositionDiv>
          </Content>
          <MenuBottom />
        </Container>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default RestaurantDashboard;
