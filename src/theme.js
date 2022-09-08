import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1473E6",
    },
    secondary: {
      main: "#F3733A",
    },
    warning: {
      main: "#222",
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: "Public Sans",
  },
});
export default theme;
