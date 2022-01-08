import React from 'react'
import { RouteProps } from 'react-router'
import List from '../Pages/category/List'
import Dashboard from '../Pages/Dashboard'

export interface MyRouteProps extends RouteProps {
  name: string
  label: string
}

export const routes: MyRouteProps[] = [
  {
    name: 'dashboard',
    label: 'Dashboard',
    path: '/',
    element: <Dashboard />
  },
  {
    name: 'category.list',
    label: 'Listar Categorias',
    path: '/categorias',
    element: <List />
  }
]

export default routes
