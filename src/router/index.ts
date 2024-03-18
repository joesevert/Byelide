import { createRouter, createWebHistory } from 'vue-router'


import AppView from '@/views/AppView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppView,
      children: [
        {
          path: 'dataSource',
          name: 'dataSource',
          component: () => import('@/views/DataSourceView.vue')
        },
        {
          path: 'layout',
          name: 'layout',
          component: () => import('@/views/PageLayoutView.vue')
        },
        {
          path: 'actions', 
          name: 'actions',
          component: () => import('@/views/ActionView.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

export default router
