import { Container, Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import History from './History'

export function Breadcrumbs() {
  return (
    <Container>
      <Box paddingBottom={1}>
        <Routes>
          <Route path="*" element={<History />} />
        </Routes>
      </Box>
    </Container>
  )
}
