import React, { useState } from 'react'
import { IconButton, Menu as MuiMenu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import routes, { MyRouteProps } from '../../routes'
import { Link } from 'react-router-dom'

const listRoutes = ['dashboard', 'category.list']
const menuRoutes = routes.filter((route) => listRoutes.includes(route.name))

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
        open={open}
        id="menu-appbar"
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {listRoutes.map((routeName, key) => {
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
              {route.name}
            </MenuItem>
          )
        })}
      </MuiMenu>
    </>
  )
}
