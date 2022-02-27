import { Container, Box } from '@material-ui/core'
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
