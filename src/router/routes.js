export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/app-home'),
  },
  {
    path: '/details/:city',
    name: 'details',
    component: () => import('@/components/app-details'), props: (route) => ({ query: route.params.city }),
  },
  {
    path: '*',
    name: 'error-404',
    redirect: { name: 'home' }
  }
]