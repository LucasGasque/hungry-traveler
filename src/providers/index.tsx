import { ReactNode } from "react";
import { LoginProvider } from "./login/index";
import { RegisterProvider } from "./register/index";
import { RestaurantsProvider } from "./restaurants/index";
import { FavoritesProvider } from "./favorites/index";
import { ScoreProvider } from "./score/index";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <LoginProvider>
      <RegisterProvider>
        <RestaurantsProvider>
          <FavoritesProvider>
            <ScoreProvider>{children}</ScoreProvider>
          </FavoritesProvider>
        </RestaurantsProvider>
      </RegisterProvider>
    </LoginProvider>
  );
};

export default Providers;
