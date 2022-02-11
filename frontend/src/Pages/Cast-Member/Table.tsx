import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables'
import { nameColumn, createdAtColumn } from '@/components/Table'
import { useEffect, useState } from 'react'
import castMemberHttp from '@/utils/http/cast-member-http'
import { CastMemberTypeMap, CastMember } from '@/utils/Models'

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
  const [data, setData] = useState<CastMember[]>([])

  useEffect(() => {
    castMemberHttp
      .list<{ data: CastMember[] }>()
      .then(({ data }) => setData(data.data))
  })
  return <MUIDataTable title="" columns={columnsDefinition} data={data} />
}

export default Table
