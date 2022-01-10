import React, { useState, useEffect } from 'react'
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables'
import { httpVideo } from '../../utils/http'

const columnsDefinition: MUIDataTableColumn[] = [
  {
    name: 'name',
    label: 'Nome'
  },
  {
    name: 'is_active',
    label: 'Ativo?'
  },
  {
    name: 'created_at',
    label: 'Criado em'
  }
]

const Table = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    httpVideo.get('/categories').then((response) => {
      setData(response.data.data)
    })
  }, [])
  return <MUIDataTable title="" data={data} columns={columnsDefinition} />
}

export default Table
