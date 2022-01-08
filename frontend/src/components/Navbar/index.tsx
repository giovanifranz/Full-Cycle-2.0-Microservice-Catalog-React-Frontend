import React from 'react'
import logo from '../../static/img/logo.png'
import { AppBar, Button } from '@mui/material'
import { Toolbar, Title, Logo } from './styles'
import { Menu } from './Menu'

export const Navbar: React.FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <Menu />
        <Title>
          <Logo src={logo} alt="CodeFlix" />
        </Title>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}
