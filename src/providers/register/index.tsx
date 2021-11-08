import { createContext, useContext, ReactNode } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../services";
import { UserData } from "../../types/index";

interface RegisterProps {
  children: ReactNode;
}

interface RegisterContextData {
  registerUser: (userData: UserData) => void;
}

const RegisterContext = createContext<RegisterContextData>(
    {} as RegisterContextData
);

export const RegisterProvider = ({ children }: RegisterProps) => {
  const history = useHistory();
  const registerUser = (userData: UserData) => {
    api
      .post("/users", userData)
      .then((response) => {
        toast.success("Usuário Cadastrado!");
        history.push("/login");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  return (
    <RegisterContext.Provider value={{ registerUser }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
