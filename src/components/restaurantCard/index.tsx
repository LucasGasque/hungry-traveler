import { useState, useEffect } from "react";
import {
  Container,
  RestaurantTitle,
  Content,
  MainContent,
  Details,
  ArrowDiv,
  Heart,
} from "./style";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { LocationData, RestaurantsData } from "../../types";
import Rating from "react-rating";
import { Button } from "@mui/material";
import { useHistory } from "react-router";
import { useFavorites } from "../../providers/favorites";

interface Restaurant {
  restaurant: RestaurantsData;
  setRoute?: (location: LocationData) => void;
  panTo?: (location: LocationData) => void;
}

const RestaurantCard = ({
  restaurant,
  setRoute,
  panTo = () => null,
}: Restaurant) => {
  const history = useHistory();
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const { favorites, addFavorites, removeFavorites } = useFavorites();

  const [isFavorite, setIsFavorite] = useState(
    favorites.map((a) => a.restaurantId).includes(restaurant.id)
  );

  const [favorite, setFavorite] = useState(
    favorites.filter((a) => a.restaurantId === restaurant.id)[0]
  );

  const handleFavorite = (id: number) => {
    if (isFavorite) {
      removeFavorites(favorite.id);
    } else {
      addFavorites(id);
    }
  };

  useEffect(() => {
    setIsFavorite(favorites.map((a) => a.restaurantId).includes(restaurant.id));
  }, [favorites]);

  useEffect(() => {
    setFavorite(favorites.filter((a) => a.restaurantId === restaurant.id)[0]);
  }, [favorites]);

  return (
    <Container onClick={() => panTo(restaurant.location)}>
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
          <Heart isFavorite={isFavorite}>
            <button>
              <FaHeart onClick={() => handleFavorite(restaurant.id)} />
            </button>
            <ArrowDiv onClick={handleVisibility} isVisible={isVisible}>
              <IoIosArrowDown />
            </ArrowDiv>
          </Heart>
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
              onClick={() => history.push(`/restaurant/${restaurant.id}`)}
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
              onClick={
                setRoute ? () => setRoute(restaurant.location) : () => ""
              }
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
