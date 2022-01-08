import React from 'react'
import {
  Box,
  Link,
  Typography,
  Breadcrumbs as MuiBreadcrumbs
} from '@mui/material'
import type { LinkProps } from '@mui/material'
import {
  Link as RouterLink,
  Route,
  Routes,
  useLocation
} from 'react-router-dom'

const breadcrumbNameMap: { [key: string]: string } = {
  '/inbox': 'Inbox',
  '/inbox/important': 'Important',
  '/trash': 'Trash',
  '/spam': 'Spam',
  '/drafts': 'Drafts'
}

interface LinkRouterProps extends LinkProps {
  to: string
  replace?: boolean
}

const LinkRouter = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink} />
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
