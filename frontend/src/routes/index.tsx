import React from 'react'
import { RouteProps } from 'react-router'
import List from '../Pages/category/List'
import Dashboard from '../Pages/Dashboard'

interface MyRouteProps extends RouteProps {
  label: string
}

export const routes: MyRouteProps[] = [
  {
    label: 'Dashboard',
    path: '/',
    element: <Dashboard />
  },
  {
    label: 'Listar Categorias',
    path: '/categorias',
    element: <List />
  }
]

export default routes
