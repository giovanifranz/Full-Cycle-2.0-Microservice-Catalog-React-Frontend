import React from 'react'
import { MUIDataTableColumn } from 'mui-datatables'
import { Chip } from '@mui/material'
import { parseISO, format } from 'date-fns'

const CastMemberTypeMap = {
  1: 'Diretor',
  2: 'Ator'
}

const createdAtColumn: MUIDataTableColumn = {
  name: 'created_at',
  label: 'Criado em',
  options: {
    customBodyRender(value) {
      return <span>{format(parseISO(value), 'dd/MM/yyyy')}</span>
    }
  }
}

const nameColumn: MUIDataTableColumn = {
  name: 'name',
  label: 'Nome'
}

const castMemberColumnsDefinition: MUIDataTableColumn[] = [
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

const categoryColumnsDefinition: MUIDataTableColumn[] = [
  nameColumn,
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
  createdAtColumn
]

const genrerColumnsDefinition: MUIDataTableColumn[] = [
  nameColumn,
  {
    name: 'categories',
    label: 'Categorias',
    options: {
      customBodyRender(value) {
        return value ? (
          <Chip label="Sim" color="primary" />
        ) : (
          <Chip label="Não" color="secondary" />
        )
      }
    }
  },
  createdAtColumn
]

export const columnsMap = {
  categories: categoryColumnsDefinition,
  genres: genrerColumnsDefinition,
  cast_members: castMemberColumnsDefinition
}
