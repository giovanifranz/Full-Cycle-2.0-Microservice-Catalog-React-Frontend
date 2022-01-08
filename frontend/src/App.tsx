import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components'
import AppRouter from './routes/AppRouter'
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Box paddingTop="70px">
        <AppRouter />
      </Box>
    </BrowserRouter>
  )
}
export default App
