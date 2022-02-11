import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables'
import {
  BadgeYes,
  BadgeNo,
  nameColumn,
  createdAtColumn
} from '@/components/Table'
import { useEffect, useState } from 'react'
import categoryHttp from '@/utils/http/category-http'
import { Category } from '@/utils/Models'

const columnsDefinition: MUIDataTableColumn[] = [
  nameColumn,
  {
    name: 'is_active',
    label: 'Ativo?',
    options: {
      customBodyRender: (value) => {
        return value ? <BadgeYes /> : <BadgeNo />
      }
    }
  },
  createdAtColumn
]

const Table = () => {
  const [data, setData] = useState<Category[]>([])

  useEffect(() => {
    categoryHttp
      .list<{ data: Category[] }>()
      .then(({ data }) => setData(data.data))
  })

  return <MUIDataTable title="" columns={columnsDefinition} data={data} />
}

export default Table
