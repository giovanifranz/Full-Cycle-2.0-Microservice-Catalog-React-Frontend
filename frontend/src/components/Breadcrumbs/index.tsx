import React, { useState } from 'react'
import {
  Box,
  Link,
  ListItem,
  ListItemText,
  Typography,
  Breadcrumbs as MuiBreadcrumbs
} from '@mui/material'
import type { LinkProps, ListItemProps } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation
} from 'react-router-dom'

interface BreadcrumbsProps extends ListItemProps {
  to: string
  open?: boolean
}

const breadcrumbNameMap: { [key: string]: string } = {
  '/inbox': 'Inbox',
  '/inbox/important': 'Important',
  '/trash': 'Trash',
  '/spam': 'Spam',
  '/drafts': 'Drafts'
}

function ListItemLink(props: BreadcrumbsProps) {
  const { to, open, ...other } = props
  const primary = breadcrumbNameMap[to]

  let icon = null
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />
  }

  return (
    <li>
      <ListItem button component={RouterLink as any} to={to} {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItem>
    </li>
  )
}

interface LinkRouterProps extends LinkProps {
  to: string
  replace?: boolean
}

const LinkRouter = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink as any} />
)

const Page = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1
        const to = `/${pathnames.slice(0, index + 1).join('/')}`

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        )
      })}
    </MuiBreadcrumbs>
  )
}

export function Breadcrumbs() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: 360 }}>
      <Routes>
        <Route path="*" element={<Page />} />
      </Routes>
    </Box>
  )
}
