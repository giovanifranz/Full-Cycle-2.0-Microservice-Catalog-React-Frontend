import React from 'react'
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables'
import {
  BadgeYes,
  BadgeNo,
  nameColumn,
  createdAtColumn
} from '../../components/Table'
import { useFetchTable } from '../../hooks/useFetchTable'

const columnsDefinition: MUIDataTableColumn[] = [
  nameColumn,
  {
    name: 'categories',
    label: 'Categorias',
    options: {
      customBodyRender(value) {
        return value ? <BadgeYes /> : <BadgeNo />
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
