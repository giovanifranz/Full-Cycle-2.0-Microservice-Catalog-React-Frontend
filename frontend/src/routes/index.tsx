import { RouteProps } from 'react-router-dom'
import Dashboard from '@/Pages/Dashboard'
import CastMember from '@/Pages/cast-member/PageList'
import CastMemberForm from '@/Pages/cast-member/PageForm'
import Genre from '@/Pages/genre/PageList'
import GenreForm from '@/Pages/genre/PageForm'
import Category from '@/Pages/category/PageList'
import CategoryForm from '@/Pages/category/PageForm'

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
    element: <Category />
  },
  {
    name: 'category.create',
    label: 'Criar Categoria',
    path: '/categories/create',
    element: <CategoryForm />
  },
  {
    name: 'category.edit',
    label: 'Editar Categoria',
    path: '/categories/:id/edit',
    element: <CategoryForm />
  },
  {
    name: 'member.list',
    label: 'Listar Membros',
    path: '/members',
    element: <CastMember />
  },
  {
    name: 'member.list.create',
    label: 'Criar membro de elenco',
    path: '/members/create',
    element: <CastMemberForm />
  },
  {
    name: 'member.list.edit',
    label: 'Editar membro de elenco',
    path: '/members/:id/edit',
    element: <CastMemberForm />
  },
  {
    name: 'genrer.list',
    label: 'Listar Gêneros',
    path: '/genres',
    element: <Genre />
  },
  {
    name: 'genrer.create',
    label: 'Criar gêneros',
    path: '/genres/create',
    element: <GenreForm />
  },
  {
    name: 'genrer.edit',
    label: 'Editar gêneros',
    path: '/genres/:id/edit',
    element: <GenreForm />
  }
]

export default routes
