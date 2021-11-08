import { ReactNode } from "react";
import { LoginProvider } from "./login/index";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <LoginProvider>
      {children}
    </LoginProvider>);
};

export default Providers;
