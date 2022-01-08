import * as React from 'react'
import logo from '../../static/img/logo.png'
import { AppBar, Button, IconButton, Menu, MenuItem } from '@mui/material'
import { Toolbar, Title, Logo } from './styles'
import MenuIcon from '@mui/icons-material/Menu'

export const Navbar: React.FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          aria-label="open drawer"
          aria-controls="menu-appbar"
          aria-haspopup="true"
        >
          <MenuIcon />
        </IconButton>
        <Menu open={false} id="menu-appbar">
          <MenuItem>Categorias</MenuItem>
        </Menu>
        <Title>
          <Logo src={logo} alt="CodeFlix" />
        </Title>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}
