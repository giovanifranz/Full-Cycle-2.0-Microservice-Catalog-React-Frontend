import { Link } from 'react-router-dom'
import { Box, Fab } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add'
import { Page } from '@/components'
import Table from './Table'

const PageList = () => {
  return (
    <Page title="Listagem Categorias">
      <Box dir={'rtl'}>
        <Fab
          title="Adicionar categoria"
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
