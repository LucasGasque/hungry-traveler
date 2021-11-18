import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { UserData } from "../../types";
import api from "../../services";

interface LoginProps {
  children: ReactNode;
}

interface LoginContextData {
  userId: string;
  token: string;
  userName: string;
  signIn: (userData: UserData) => void;
  logout: () => void;
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData);

export const LoginProvider = ({ children }: LoginProps) => {
  const history = useHistory();
  const [userId, setUserId] = useState(
    () => localStorage.getItem("@hungryTraveler:userId") || ""
  );
  const [token, setToken] = useState(
    () => localStorage.getItem("@hungryTraveler:token") || ""
  );
  const [userName, setUserName] = useState(
    () => localStorage.getItem("@hungryTraveler:userName") || ""
  );

  const signIn = (userData: UserData) => {
    api
      .post("/login", userData)
      .then((response) => {
        toast.success(`Bem vindo ${response.data.user.name}`);
        localStorage.setItem(
          "@hungryTraveler:token",
          response.data.accessToken
        );
        localStorage.setItem("@hungryTraveler:userId", response.data.user.id);
        localStorage.setItem(
          "@hungryTraveler:userName",
          response.data.user.name
        );
        setToken(response.data.accessToken);
        setUserId(response.data.user.id);
        setUserName(response.data.user.name);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Senha ou email incorreto");
      });
  };

  const logout = () => {
    localStorage.clear();
    setToken("");
    setUserId("");
    setUserName("");
    history.push("/login");
  };

  return (
    <LoginContext.Provider value={{ token, userId, userName, signIn, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
