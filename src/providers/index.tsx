import { ReactNode } from "react";
import { LoginProvider } from "./login/index";
import { RegisterProvider } from "./register/index";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <LoginProvider>
      <RegisterProvider>{children}</RegisterProvider>
    </LoginProvider>
  );
};

export default Providers;
