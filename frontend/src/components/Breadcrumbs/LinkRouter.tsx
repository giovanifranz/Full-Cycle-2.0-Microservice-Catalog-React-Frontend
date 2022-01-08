import React from 'react'
import { Link, LinkProps } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { styled } from '@mui/system'

interface LinkRouterProps extends LinkProps {
  to: string
  replace?: boolean
}

const LinkRouterComponent = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink} />
)

export const LinkRouter = styled(LinkRouterComponent)`
  color: #4db5ab;

  &:focus,
  &:active {
    color: #4db5ab;
  }

  &:hover {
    color: #055a52;
  }
`
