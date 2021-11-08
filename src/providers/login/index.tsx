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
  signIn: (userData: UserData) => void;
  logout: () => void
}

const LoginContext = createContext<LoginContextData>(
  {} as LoginContextData
);

export const LoginProvider = ({ children }: LoginProps) => {
  const history = useHistory();
  const [userId, setUserId] = useState(
    () => localStorage.getItem("userId") || ""
  );

  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  const signIn = (userData: UserData) => {
    api
      .post("/login", userData)
      .then((response) => {
        toast.success(`Bem vindo ${response.data.user.name}`);
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("userId", response.data.user.id);
        setToken(response.data.accessToken);
        setUserId(response.data.user.id);
        history.push("");
      })
      .then((err) => {
        console.log(err);
        toast.error("Senha ou email incorreto");
      });
  };

  const logout = () => {
      localStorage.clear()
      setToken('')
      setUserId('')
      history.push('/login')
  }

  return (
    <LoginContext.Provider value={{ token, userId, signIn, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
