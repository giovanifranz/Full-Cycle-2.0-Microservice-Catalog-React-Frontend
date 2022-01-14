import React, { useState, useEffect } from 'react'
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables'
import {
  BadgeYes,
  BadgeNo,
  nameColumn,
  createdAtColumn
} from '../../components/Table'
import { httpVideo } from '../../utils/http'

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
  const [data, setData] = useState([])
  useEffect(() => {
    httpVideo.get('/categories').then((response) => {
      setData(response.data.data)
    })
  })
  return <MUIDataTable title="" columns={columnsDefinition} data={data} />
}

export default Table
