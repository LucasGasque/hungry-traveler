import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#EB2A44",
      light: "#EF5469",
      dark: "#A41D2F",
      contrastText: "#fff",
    },
    secondary: {
      main: "#E0E0E0",
      light: "#E6E6E6",
      dark: "#9C9C9C",
      contrastText: "#505C6E",
    },
    text: {
      primary: "#fff",
    },
  },
});
