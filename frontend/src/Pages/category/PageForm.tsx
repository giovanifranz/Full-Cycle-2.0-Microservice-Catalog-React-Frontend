import { Form } from './Form'
import { Page } from '@/components'
import { useParams } from 'react-router-dom'

const PageForm = () => {
  const { id } = useParams()

  return (
    <Page title={`${!id ? 'Criar' : 'Editar'} Categoria`}>
      <Form />
    </Page>
  )
}

export default PageForm
