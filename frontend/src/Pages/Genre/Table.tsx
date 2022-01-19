import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables'
import { nameColumn, createdAtColumn } from '@/components/Table'
import { useFetchTable } from '@/hooks/useFetchTable'

const columnsDefinition: MUIDataTableColumn[] = [
  nameColumn,
  {
    name: 'categories',
    label: 'Categorias',
    options: {
      customBodyRender(value) {
        return value.map((value: { name: string }) => value.name).join(', ')
      }
    }
  },
  createdAtColumn
]

const Table = () => {
  const data = useFetchTable('genres')
  return <MUIDataTable title="" columns={columnsDefinition} data={data} />
}

export default Table
