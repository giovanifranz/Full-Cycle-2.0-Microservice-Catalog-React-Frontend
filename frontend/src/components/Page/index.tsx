import { Container } from '@mui/material'
import { Title } from './styles'
import React from 'react'

type PageProps = {
  title: string
}

export const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <div>
      <Container>
        <Title as="h1">{title}</Title>
        {children}
      </Container>
    </div>
  )
}
