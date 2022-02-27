import {
  createStyles,
  Link,
  LinkProps,
  makeStyles,
  Theme
} from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkRouter: {
      color: theme.palette.secondary.main,
      '&:focus, &:active': {
        color: theme.palette.secondary.main
      },
      '&:hover': {
        color: theme.palette.secondary.dark
      }
    }
  })
)

interface LinkRouterProps extends LinkProps {
  to: string
  replace?: boolean
}

const LinkRouter = (props: LinkRouterProps) => {
  const classes = useStyles()
  return (
    <Link {...props} component={RouterLink} className={classes.linkRouter} />
  )
}

export default LinkRouter
