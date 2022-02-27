import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables'
import { nameColumn, createdAtColumn } from '@/components/Table'
import { useEffect, useState } from 'react'
import genreHtpp from '@/utils/http/genre-http'
import { Genre } from '@/utils/Models'

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
  const [data, setData] = useState<Genre[]>([])

  useEffect(() => {
    genreHtpp.list<{ data: Genre[] }>().then(({ data }) => setData(data.data))
  })
  return <MUIDataTable title="" columns={columnsDefinition} data={data} />
}

export default Table
