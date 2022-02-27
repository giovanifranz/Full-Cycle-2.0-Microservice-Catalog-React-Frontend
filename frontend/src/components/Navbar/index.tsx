import logo from '@/static/img/logo.png'
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  makeStyles,
  Theme
} from '@material-ui/core'

import { Menu } from './Menu'

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    backgroundColor: '#000000'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
  logo: {
    width: 100,
    [theme.breakpoints.up('sm')]: {
      width: 170
    }
  }
}))

export const Navbar: React.FC = () => {
  const classes = useStyles()

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Menu />
        <Typography className={classes.title}>
          <img src={logo} alt="logo" className={classes.logo} />
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}
