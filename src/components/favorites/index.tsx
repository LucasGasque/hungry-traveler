import { useFavorites } from "../../providers/favorites";
import { Shadow, Container, Header, Button, Box } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useRestaurants } from "../../providers/restaurants";
import { useState, useEffect } from "react";
import RestaurantCard from "../restaurantCard";

const Favorites = () => {
  const { favorites, showFavorites, handleFavorites } = useFavorites();
  const { restaurants } = useRestaurants();
  const [userFavorites, setUserFavorites] = useState(
    restaurants.filter((restaurant) =>
      favorites.map((a) => a.restaurantId).includes(restaurant.id)
    ) || []
  );

  useEffect(() => {
    setUserFavorites(
      restaurants.filter((restaurant) =>
        favorites.map((a) => a.restaurantId).includes(restaurant.id)
      ) || []
    );
  }, [favorites]);

  return (
    <Shadow show={showFavorites}>
      <Container>
        <Header>
          <h3>Favoritos</h3>
          <Button onClick={() => handleFavorites()}>
            <AiOutlineClose />
          </Button>
        </Header>
        <Box>
          {userFavorites.map((favorite) => (
            <RestaurantCard key={favorite.id} restaurant={favorite} />
          ))}
        </Box>
      </Container>
    </Shadow>
  );
};

export default Favorites;
