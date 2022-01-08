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
    path: '/categories',
    element: <List />
  },
  {
    name: 'category.create',
    label: 'Criar Categoria',
    path: '/categories/create',
    element: <List />
  },
  {
    name: 'category.edit',
    label: 'Editar Categoria',
    path: '/categories/:id/edit',
    element: <List />
  }
]

export default routes
