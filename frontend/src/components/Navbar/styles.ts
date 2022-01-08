import { Toolbar as MuiToolbar, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const Toolbar = styled(MuiToolbar)`
  background-color: #000;
`

export const Title = styled(Typography)`
  flex-grow: 1;
  text-align: center;
`

export const Logo = styled('img')(({ theme }) => ({
  width: 100,
  [theme.breakpoints.up('sm')]: {
    width: 170
  }
}))
