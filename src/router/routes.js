import Layout from '@/components/layout/Layout'

import NotFoundPage from '@/components/page/404'
import ErrorPage from '@/components/page/500'

let routes = [
  {
    path: '/',
    component: Layout,
  },
  {
    path: '/404',
    component: NotFoundPage
  },
  {
    path: '/500',
    component: ErrorPage
  },
  {
    path: '*',
    redirect: '/404',
  }
]

export default routes
