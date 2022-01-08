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
import routes from '../../routes'
import RouteParser from 'route-parser'

const breadcrumbNameMap: { [key: string]: string } = {}
routes.forEach(
  (route) => (breadcrumbNameMap[route.path as string] = route.label)
)

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
  pathnames.unshift('/')

  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1
        const to = pathnames
          .slice(0, index + 1)
          .join('/')
          .replace('//', '/')

        const route = Object.keys(breadcrumbNameMap).find((path) =>
          new RouteParser(path).match(to)
        )

        if (route === undefined) {
          return null
        }

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[route]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[route]}
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
