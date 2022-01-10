import React from 'react'
import { Box, Fab } from '@mui/material'
import { Page } from '../components'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import Table from '../components/Table'

interface PageListProps {
  pageTitle: string
  title: string
  path: string
  table: 'categories' | 'genres' | 'cast_members'
}

const PageList = ({ pageTitle, title, path, table }: PageListProps) => {
  return (
    <Page title={pageTitle}>
      <Box dir="rtl">
        <Fab title={title} size="small" component={Link} to={path}>
          <AddIcon />
        </Fab>
      </Box>
      <Box>
        <Table type={table} />
      </Box>
    </Page>
  )
}

export default PageList
