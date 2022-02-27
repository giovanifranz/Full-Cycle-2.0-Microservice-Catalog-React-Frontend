import { Typography, Breadcrumbs } from '@material-ui/core'
import { useLocation } from 'react-router-dom'
import routes from '@/routes'
import RouteParser from 'route-parser'
import LinkRouter from './LinkRouter'

const breadcrumbNameMap: { [key: string]: string } = {}
routes.forEach(
  (route) => (breadcrumbNameMap[route.path as string] = route.label)
)

const History = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)
  pathnames.unshift('/')

  return (
    <Breadcrumbs aria-label="breadcrumb">
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
          <Typography color="primary" key={to}>
            {breadcrumbNameMap[route]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[route]}
          </LinkRouter>
        )
      })}
    </Breadcrumbs>
  )
}

export default History
