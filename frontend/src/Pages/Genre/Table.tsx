import React, { useState, useEffect } from 'react'
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables'
import { httpVideo } from '../../utils/http'
import {
  BadgeYes,
  BadgeNo,
  nameColumn,
  createdAtColumn
} from '../../components/Table'

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
  const [data, setData] = useState([])
  useEffect(() => {
    httpVideo.get('/genres').then((response) => {
      setData(response.data.data)
    })
  })
  return <MUIDataTable title="" columns={columnsDefinition} data={data} />
}

export default Table
