import { useState } from 'react'
import { IconButton, Menu as MuiMenu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import routes, { MyRouteProps } from '@/routes'
import { Link } from 'react-router-dom'

type RouteName = 'dashboard' | 'category.list' | 'member.list' | 'genrer.list'

const listRoutes = {
  dashboard: 'Dashboard',
  'category.list': 'Categorias',
  'member.list': 'Membros de elenco',
  'genrer.list': 'Gêneros'
}

const menuRoutes = routes.filter((route) =>
  Object.keys(listRoutes).includes(route.name)
)

export const Menu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <IconButton
        color="inherit"
        edge="start"
        aria-label="open drawer"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>
      <MuiMenu
        id="menu-appbar"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        getContentAnchorEl={null}
      >
        {Object.keys(listRoutes).map((routeName, key) => {
          const route = menuRoutes.find(
            (route) => route.name === routeName
          ) as MyRouteProps
          return (
            <MenuItem
              component={Link}
              key={key}
              onClick={handleClose}
              to={route.path as string}
            >
              {listRoutes[routeName as RouteName]}
            </MenuItem>
          )
        })}
      </MuiMenu>
    </>
  )
}
