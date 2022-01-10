import React from 'react'
import { RouteProps } from 'react-router'
import PageList from '../Pages/PageList'
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
    element: (
      <PageList
        pageTitle="Listagem de Categoria"
        title="Adicionar Categoria"
        path="/categories/create"
        table="categories"
      />
    )
  },
  {
    name: 'member.list',
    label: 'Listar Membros',
    path: '/members',
    element: (
      <PageList
        pageTitle="Listagem de Membros"
        title="Adicionar Membro"
        path="/members/create"
        table="cast_members"
      />
    )
  },
  {
    name: 'genrer.list',
    label: 'Listar Gêneros',
    path: '/genrers',
    element: (
      <PageList
        pageTitle="Listagem de Gêneros"
        title="Adicionar Gênero"
        path="/genrers/create"
        table="genres"
      />
    )
  }
]

export default routes
