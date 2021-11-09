import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { toast } from "react-toastify";
import api from "../../services";
import { FavoritesData } from "../../types";
import { useLogin } from "../login/index";

interface FavoritesProps {
  children: ReactNode;
}

interface FavoritesContextData {
  favorites: FavoritesData[];
  addFavorites: (restaurantId: number) => void;
  removeFavorites: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
);

export const FavoritesProvider = ({ children }: FavoritesProps) => {
  const { userId, token } = useLogin();
  const [favorites, setFavorites] = useState([]);

  const getFavorites = () => {
    api
      .get(`/favorites?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setFavorites(response.data))
      .catch((error) => {
        console.log(error);
        setFavorites([]);
      });
  };

  const addFavorites = async (restaurantId: number) => {
    const data = {
      userId: userId,
      restaurantId: restaurantId,
    };
    await api
      .post(`/favorites`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        getFavorites();
        toast.success("Restaurante favoritado");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Algo deu errado");
      });
  };

  const removeFavorites = async (id: number) => {
    await api
      .delete(`/favorites/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Restaurante removido");
        getFavorites();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Algo deu errado");
      });
  };

  useEffect(() => getFavorites(), []);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorites, removeFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
