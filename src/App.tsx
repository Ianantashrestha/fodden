import AppRoutes from "./routes";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            background: "#fafafa",
            fontFamily: "Exo",
          },
        }}
      />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
