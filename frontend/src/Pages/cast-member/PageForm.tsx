import { Page } from '@/components'
import { useParams } from 'react-router-dom'
import { Form } from './Form'

const PageForm = () => {
  const { id } = useParams()

  return (
    <Page title={`${!id ? 'Criar' : 'Editar'} membro de elenco`}>
      <Form />
    </Page>
  )
}

export default PageForm
