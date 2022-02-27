import { Box } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import { Navbar, Breadcrumbs } from './components'
import AppRouter from './routes/AppRouter'
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Box paddingTop="70px">
        <Breadcrumbs />
        <AppRouter />
      </Box>
    </BrowserRouter>
  )
}
export default App
