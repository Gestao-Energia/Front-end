import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/GlobalTheme";
import { AlertProvider } from "./contexts/alertContext";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AlertProvider>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </AlertProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
