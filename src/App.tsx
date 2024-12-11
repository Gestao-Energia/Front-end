import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/GlobalTheme";
import { AlertProvider } from "./contexts/alertContext";
import { AuthProvider } from "./contexts/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AlertProvider>
            <AuthProvider>
              <Router />
            </AuthProvider>
          </AlertProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
