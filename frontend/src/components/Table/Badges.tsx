import theme from '@/theme'
import { Chip, createTheme, ThemeProvider } from '@material-ui/core'

const localTheme = createTheme({
  palette: {
    primary: theme.palette.success,
    secondary: theme.palette.error
  }
})

export const BadgeYes = () => (
  <ThemeProvider theme={localTheme}>
    <Chip label="Sim" color="primary" />
  </ThemeProvider>
)

export const BadgeNo = () => (
  <ThemeProvider theme={localTheme}>
    <Chip label="Não" color="secondary" />
  </ThemeProvider>
)
