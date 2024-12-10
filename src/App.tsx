import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/GlobalTheme";
import { AlertProvider } from "./hooks/useAlert";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AlertProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
