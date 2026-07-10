<script setup lang="ts">
import { onMounted, provide } from 'vue'
import { registerMicroApps, start, initGlobalState } from 'qiankun'
import { microApps } from '@/config/apps'

const actions = initGlobalState({
  count: 0,
  user: {
    name: 'Guest',
    role: 'visitor'
  },
  theme: 'light'
})

actions.onGlobalStateChange((state, prev) => {
  console.log('Global state changed:', prev, '->', state)
})

provide('GlobalStateActions', actions)

onMounted(() => {
  registerMicroApps(microApps, {
    beforeLoad: (app) => {
      console.log('before load:', app.name)
      return Promise.resolve()
    },
    beforeMount: (app) => {
      console.log('before mount:', app.name)
      return Promise.resolve()
    },
    afterMount: (app) => {
      console.log('after mount:', app.name)
      return Promise.resolve()
    },
    beforeUnmount: (app) => {
      console.log('before unmount:', app.name)
      return Promise.resolve()
    },
    afterUnmount: (app) => {
      console.log('after unmount:', app.name)
      return Promise.resolve()
    }
  })

  start({
    sandbox: {
      strictStyleIsolation: true
    }
  })
})
</script>

<template>
  <div class="main-app">
    <nav class="nav-bar">
      <h1 class="logo">Qiankun 微前端教学项目</h1>
      <ul class="nav-links">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/react">React 微应用</router-link></li>
        <li><router-link to="/vue">Vue 微应用</router-link></li>
        <li><router-link to="/static">静态微应用</router-link></li>
      </ul>
    </nav>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.main-app {
  min-height: 100vh;
  background: #f5f5f5;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: #2c3e50;
  color: white;
}

.logo {
  font-size: 20px;
  font-weight: 600;
}

.nav-links {
  display: flex;
  gap: 24px;
  list-style: none;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background 0.3s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  background: #34495e;
}

.content {
  padding: 24px;
}
</style>