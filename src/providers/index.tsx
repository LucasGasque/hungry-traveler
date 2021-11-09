import { ReactNode } from "react";
import { LoginProvider } from "./login/index";
import { RegisterProvider } from "./register/index";
import { RestaurantsProvider } from "./restaurants/index";
import { FavoritesProvider } from "./favorites/index";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <LoginProvider>
      <RegisterProvider>
        <RestaurantsProvider>
          <FavoritesProvider>{children}</FavoritesProvider>
        </RestaurantsProvider>
      </RegisterProvider>
    </LoginProvider>
  );
};

export default Providers;
