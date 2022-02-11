import { RouteProps } from 'react-router'
import Dashboard from '@/Pages/Dashboard'
import CastMember from '@/Pages/Cast-Member/PageList'
import CastMemberForm from '@/Pages/Cast-Member/PageForm'
import Genre from '@/Pages/Genre/PageList'
import GenreForm from '@/Pages/Genre/PageForm'
import Category from '@/Pages/Category/PageList'
import CategoryForm from '@/Pages/Category/PageForm'

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
  }
]

export default routes
