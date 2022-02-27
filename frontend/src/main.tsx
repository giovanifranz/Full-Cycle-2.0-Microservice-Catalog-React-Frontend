import ReactDOM from 'react-dom'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import theme from './theme'
import App from '@/App'
import { StrictMode } from 'react'

ReactDOM.render(
  <StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
