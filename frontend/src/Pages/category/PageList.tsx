import { Link } from 'react-router-dom'
import { Box, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { Page } from '@/components'
import Table from './Table'

const PageList = () => {
  return (
    <Page title="Listagem Categorias">
      <Box dir={'rtl'} paddingBottom={2}>
        <Fab
          title="Adicionar categoria"
          color="secondary"
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
