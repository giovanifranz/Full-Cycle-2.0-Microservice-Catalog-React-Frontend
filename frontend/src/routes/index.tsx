import { RouteProps } from 'react-router'
import Dashboard from '@/Pages/Dashboard'
import CastMember from '@/Pages/Cast-Member/PageList'
import Genre from '@/Pages/Genre/PageList'
import Category from '@/Pages/Category/PageList'

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
    name: 'member.list',
    label: 'Listar Membros',
    path: '/members',
    element: <CastMember />
  },
  {
    name: 'genrer.list',
    label: 'Listar Gêneros',
    path: '/genrers',
    element: <Genre />
  }
]

export default routes
