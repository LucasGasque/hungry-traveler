import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import api from "../../services";
import { RestaurantsData } from "../../types/index";

interface RestaurantsProps {
  children: ReactNode;
}

interface RestaurantsContextData {
  restaurants: RestaurantsData[];
}

const RestaurantsContext = createContext<RestaurantsContextData>(
  {} as RestaurantsContextData
);

export const RestaurantsProvider = ({ children }: RestaurantsProps) => {
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = () => {
    api
      .get("/restaurants")
      .then((response) => setRestaurants(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

export const useRestaurants = () => useContext(RestaurantsContext);
