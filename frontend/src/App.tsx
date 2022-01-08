import { Box } from '@mui/material'
import React from 'react'
import { Navbar, Page } from './components'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box paddingTop="70px">
        <Page title="Categorias">OLA</Page>
      </Box>
    </>
  )
}
export default App
