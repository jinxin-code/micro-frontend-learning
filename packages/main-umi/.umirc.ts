import { defineConfig } from 'umi'

export default defineConfig({
  npmClient: 'pnpm',
  port: 8103,
  qiankun: {
    master: {
      apps: [
        {
          name: 'react-app',
          entry: '//localhost:3000',
          activeRule: '/react'
        },
        {
          name: 'vue-app',
          entry: '//localhost:8081',
          activeRule: '/vue'
        },
        {
          name: 'static-app',
          entry: '//localhost:8082',
          activeRule: '/static'
        }
      ],
      sandbox: {
        strictStyleIsolation: true
      }
    }
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index'
    },
    {
      path: '/react',
      component: '@/pages/micro'
    },
    {
      path: '/vue',
      component: '@/pages/micro'
    },
    {
      path: '/static',
      component: '@/pages/micro'
    }
  ]
})