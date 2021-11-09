import { ReactNode } from "react";
import { LoginProvider } from "./login/index";
import { RegisterProvider } from "./register/index";
import { RestaurantsProvider } from "./restaurants/index";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <LoginProvider>
      <RegisterProvider>
        <RestaurantsProvider>{children}</RestaurantsProvider>
      </RegisterProvider>
    </LoginProvider>
  );
};

export default Providers;
