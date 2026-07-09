import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/react',
    name: 'react-app',
    component: () => import('@/views/MicroApp.vue'),
    props: { appName: 'react-app' }
  },
  {
    path: '/vue',
    name: 'vue-app',
    component: () => import('@/views/MicroApp.vue'),
    props: { appName: 'vue-app' }
  },
  {
    path: '/static',
    name: 'static-app',
    component: () => import('@/views/MicroApp.vue'),
    props: { appName: 'static-app' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router