import React from 'react'
import { MUIDataTableColumn } from 'mui-datatables'
import { parseISO, format } from 'date-fns'

export const createdAtColumn: MUIDataTableColumn = {
  name: 'created_at',
  label: 'Criado em',
  options: {
    customBodyRender(value) {
      return <span>{format(parseISO(value), 'dd/MM/yyyy')}</span>
    }
  }
}

export const nameColumn: MUIDataTableColumn = {
  name: 'name',
  label: 'Nome'
}
