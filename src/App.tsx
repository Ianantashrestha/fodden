import AppRoutes from "./routes";
import { ThemeProvider } from "styled-components";
import createTheme from "./utils/theme";
import GlobalCSS from "./global.css";
function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <GlobalCSS />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
