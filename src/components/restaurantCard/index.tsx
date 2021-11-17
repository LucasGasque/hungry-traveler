import React, { useState } from "react";
import {
  Container,
  RestaurantTitle,
  Content,
  MainContent,
  Details,
  ArrowDiv,
} from "./style";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RestaurantsData } from "../../types";
import Rating from "react-rating";
import { Button } from "@mui/material";

interface Restaurant {
  restaurant: RestaurantsData;
}

const RestaurantCard = ({ restaurant }: Restaurant) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container>
      <MainContent>
        <img src={restaurant.img} alt={restaurant.name} />
        <Content>
          <div>
            <RestaurantTitle>{restaurant.name}</RestaurantTitle>
            <p>{restaurant.type}</p>
            <Rating
              readonly
              initialRating={3.5}
              fullSymbol={<AiFillStar size={"16px"} color={"#EB972A"} />}
              emptySymbol={<AiOutlineStar size={"16px"} color={"#EB972A"} />}
            />
            <p>
              {restaurant.businessHours.open}:00 às{" "}
              {restaurant.businessHours.close}:00
            </p>
          </div>
          <div>
            <FaHeart />
            <ArrowDiv onClick={handleVisibility} isVisible={isVisible}>
              <IoIosArrowDown />
            </ArrowDiv>
          </div>
        </Content>
      </MainContent>
      {isVisible && (
        <Details>
          <h3>Descrição</h3>
          <p>{restaurant.description}</p>
          <div>
            <Button
              color="primary"
              variant="contained"
              sx={{
                width: "45%",
                height: "45px",
                padding: "0",
                textTransform: "none",
                fontFamily: "Righteous, cursive",
                borderRadius: "8px",
              }}
            >
              Ir para página
            </Button>
            <Button
              color="secondary"
              variant="contained"
              sx={{
                width: "45%",
                height: "45px",
                padding: "0",
                textTransform: "none",
                fontFamily: "Righteous, cursive",
                borderRadius: "8px",
              }}
            >
              Traçar rota
            </Button>
          </div>
        </Details>
      )}
    </Container>
  );
};

export default RestaurantCard;
