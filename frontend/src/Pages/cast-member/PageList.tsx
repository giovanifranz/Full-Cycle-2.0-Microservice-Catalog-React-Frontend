import { Link } from 'react-router-dom'
import { Box, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { Page } from '@/components/Page'
import Table from './Table'

const PageList = () => {
  return (
    <Page title="Listagem de membros de elencos">
      <Box dir={'rtl'} paddingBottom={2}>
        <Fab
          title="Adicionar membro de elenco"
          color="secondary"
          component={Link}
          to="/members/create"
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
