import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { toast } from "react-toastify";
import api from "../../services";
import { ScoreData } from "../../types";
import { useLogin } from "../login";

interface ScoreProps {
  children: ReactNode;
}

interface ScoreContextData {
  scores: ScoreData[];
  addScore: (score: number, restaurantId: number) => void;
}

const ScoreContext = createContext<ScoreContextData>({} as ScoreContextData);

export const ScoreProvider = ({ children }: ScoreProps) => {
  const { userId, token } = useLogin();
  const [scores, setScores] = useState([]);

  const getScore = () => {
    api
      .get("/score")
      .then((response) => setScores(response.data))
      .catch((error) => {
        console.log(error);
        setScores([]);
      });
  };

  const deleteScore = async (id: number) => {
    await api
      .delete(`/score/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => console.log(error));
  };

  const addScore = async (score: number, restaurantId: number) => {
    const data = {
      userId: userId,
      restaurantId: restaurantId,
      score: score,
    };
    await api
      .post("/score", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        getScore();
        toast.success("Avaliação enviada");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Algo deu errado");
      });
  };

  useEffect(() => getScore(), []);

  return (
    <ScoreContext.Provider value={{ scores, addScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => useContext(ScoreContext);
