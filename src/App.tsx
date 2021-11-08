import { ToastContainer } from "react-toastify";
import Providers from "./providers";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { muiTheme } from "./styles/muiTheme";
import { ThemeProvider } from "@mui/material/styles";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <Providers>
      <ThemeProvider theme={muiTheme}>
        <GlobalStyle />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes />
      </ThemeProvider>
    </Providers>
  );
};

export default App;
