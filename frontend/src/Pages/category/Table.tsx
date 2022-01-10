import React, { useState, useEffect } from 'react'
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables'
import { httpVideo } from '../../utils/http'
import { Chip } from '@mui/material'
import { parseISO, format } from 'date-fns'

const columnsDefinition: MUIDataTableColumn[] = [
  {
    name: 'name',
    label: 'Nome'
  },
  {
    name: 'is_active',
    label: 'Ativo?',
    options: {
      customBodyRender: (value) => {
        return value ? (
          <Chip label="Sim" color="primary" />
        ) : (
          <Chip label="Não" color="secondary" />
        )
      }
    }
  },
  {
    name: 'created_at',
    label: 'Criado em',
    options: {
      customBodyRender: (value) => {
        return format(parseISO(value), 'dd/MM/yyyy')
      }
    }
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
