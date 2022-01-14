import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Fab } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add'
import { Page } from '../../components/Page'
import Table from './Table'

const PageList = () => {
  return (
    <Page title="Listagem de membros de elencos">
      <Box dir={'rtl'}>
        <Fab
          title="Adicionar membro de elenco"
          component={Link}
          to="/Cast-Members/create"
        >
          <AddIcon />
        </Fab>
      </Box>
      <Box>
        <Table />
      </Box>
    </Page>
  )
}

export default PageList
