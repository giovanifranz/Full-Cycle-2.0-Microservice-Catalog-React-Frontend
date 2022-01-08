import React from 'react'
import { RouteProps } from 'react-router'
import PageList from '../Pages/category/PageList'
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
    path: '/categories',
    element: <PageList />
  },
  {
    name: 'category.create',
    label: 'Criar Categoria',
    path: '/categories/create',
    element: <PageList />
  }
]

export default routes
