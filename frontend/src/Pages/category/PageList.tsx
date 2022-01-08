import React from 'react'
import { Box, Fab } from '@mui/material'
import { Page } from '../../components'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import Table from './Table'

const PageList = () => {
  return (
    <Page title="Listagem de Categoria">
      <Box dir="rtl">
        <Fab
          title="Adicionar Categoria"
          size="small"
          component={Link}
          to="/categories/create"
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
