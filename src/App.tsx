import { BrowserRouter } from 'react-router-dom'
import Router from './routes/router'
import { ThemeProvider } from '@mui/material'
import { theme } from './styles/GlobalTheme'
import Login  from './components/Login'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Login />
      <Router />
    </BrowserRouter>
    </ThemeProvider>
  )

}

export default App;


