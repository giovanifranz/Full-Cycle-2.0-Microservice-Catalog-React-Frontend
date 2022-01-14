import React from 'react'
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables'
import { nameColumn, createdAtColumn } from '../../components/Table'
import { useFetchTable } from '../../hooks/useFetchTable'

const CastMemberTypeMap = {
  1: 'Diretor',
  2: 'Ator'
}

export const columnsDefinition: MUIDataTableColumn[] = [
  {
    name: 'id',
    label: 'ID',
    options: {
      sort: false
    }
  },
  nameColumn,
  {
    name: 'type',
    label: 'Tipo',
    options: {
      customBodyRender(value) {
        return CastMemberTypeMap[value as 1 | 2]
      }
    }
  },
  createdAtColumn,
  {
    name: 'actions',
    label: 'Ações'
  }
]

const Table = () => {
  const data = useFetchTable('cast_members')
  return <MUIDataTable title="" columns={columnsDefinition} data={data} />
}

export default Table
