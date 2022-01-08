import { Box } from '@mui/material'
import React from 'react'
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
