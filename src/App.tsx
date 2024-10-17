import { BrowserRouter } from 'react-router-dom'
import Router from './routes/router'
import { ThemeProvider } from '@mui/material'
import { theme } from './styles/GlobalTheme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
