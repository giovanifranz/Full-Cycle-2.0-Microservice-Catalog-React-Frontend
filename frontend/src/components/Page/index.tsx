import React, { ReactNode } from 'react'
import { Container } from '@mui/material'
import { Title } from './styles'

type PageProps = {
  title: string
  children: ReactNode
}

export const Page = ({ title, children }: PageProps) => {
  return (
    <div>
      <Container>
        <Title as="h1">{title}</Title>
        {children}
      </Container>
    </div>
  )
}
