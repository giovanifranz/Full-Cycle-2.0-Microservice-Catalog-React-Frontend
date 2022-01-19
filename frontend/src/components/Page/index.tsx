import { ReactNode } from 'react'
import { Container, Box } from '@mui/material'
import { Title } from './styles'

type PageProps = {
  title: string
  children: ReactNode
}

export const Page = ({ title, children }: PageProps) => {
  return (
    <div>
      <Container>
        <Title as="h1" variant="h4">
          {title}
        </Title>
        <Box paddingTop={1}>{children}</Box>
      </Container>
    </div>
  )
}
