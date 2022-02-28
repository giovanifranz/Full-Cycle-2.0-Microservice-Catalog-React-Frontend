import ReactDOM from 'react-dom'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import theme from './theme'
import App from '@/App'
import { StrictMode } from 'react'
import { SnackbarProvider } from '@/components'

ReactDOM.render(
  <StrictMode>
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider>
        <CssBaseline />
        <App />
      </SnackbarProvider>
    </MuiThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
