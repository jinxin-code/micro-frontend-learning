<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { registerApplication, start, type LifeCycles } from 'single-spa'

const currentPath = ref('/')
const count = ref(0)

function navigate(path: string) {
  currentPath.value = path
  window.history.pushState({ path }, '', path)
}

onMounted(() => {
  registerApplication({
    name: '@single-spa/react-app',
    app: () => (window as unknown as { System: { import: (url: string) => Promise<LifeCycles> } }).System.import('//localhost:8300/main.js'),
    activeWhen: ['/react'],
    customProps: {
      onGlobalStateChange: (state: Record<string, unknown>) => {
        console.log('Global state changed:', state)
        if (state.count !== undefined) {
          count.value = state.count as number
        }
      },
      setGlobalState: (state: Record<string, unknown>) => {
        console.log('Set global state:', state)
        if (state.count !== undefined) {
          count.value = state.count as number
        }
      }
    }
  })

  registerApplication({
    name: '@single-spa/vue-app',
    app: () => (window as unknown as { System: { import: (url: string) => Promise<LifeCycles> } }).System.import('//localhost:8301/main.js'),
    activeWhen: ['/vue'],
    customProps: {
      onGlobalStateChange: (state: Record<string, unknown>) => {
        console.log('Global state changed:', state)
        if (state.count !== undefined) {
          count.value = state.count as number
        }
      },
      setGlobalState: (state: Record<string, unknown>) => {
        console.log('Set global state:', state)
        if (state.count !== undefined) {
          count.value = state.count as number
        }
      }
    }
  })

  start({
    urlRerouteOnly: true
  })

  window.addEventListener('popstate', (e) => {
    if (e.state) {
      currentPath.value = e.state.path
    }
  })
})

function updateGlobalCount() {
  count.value++
  console.log('Update global count:', count.value)
}
</script>

<template>
  <div class="main-app">
    <nav class="nav-bar">
      <h1 class="logo">Vue 主应用 (single-spa)</h1>
      <ul class="nav-links">
        <li>
          <a :class="{ active: currentPath === '/' }" @click="navigate('/')">首页</a>
        </li>
        <li>
          <a :class="{ active: currentPath === '/react' }" @click="navigate('/react')">React 微应用</a>
        </li>
        <li>
          <a :class="{ active: currentPath === '/vue' }" @click="navigate('/vue')">Vue 微应用</a>
        </li>
      </ul>
    </nav>
    <main class="content">
      <div v-if="currentPath === '/'">
        <div class="home">
          <h2>欢迎来到 Vue 主应用 (single-spa)</h2>
          <div class="cards">
            <div class="card">
              <h3>🏠 主应用</h3>
              <p>基于 Vue 3 + single-spa 构建</p>
              <p>使用 registerApplication 注册微应用</p>
            </div>
            <div class="card">
              <h3>⚛️ React 微应用</h3>
              <p>运行在 localhost:8300</p>
              <p>演示 React 技术栈接入</p>
            </div>
            <div class="card">
              <h3>💚 Vue 微应用</h3>
              <p>运行在 localhost:8301</p>
              <p>演示 Vue 技术栈接入</p>
            </div>
          </div>
          <div class="global-state-demo">
            <h3>🌐 全局状态管理演示</h3>
            <p>点击按钮更新全局状态，所有微应用都能收到通知</p>
            <button @click="updateGlobalCount">更新全局计数: {{ count }}</button>
          </div>
        </div>
      </div>
      <div v-else id="micro-container">
        <h2>{{ currentPath === '/react' ? '⚛️ React 微应用' : '💚 Vue 微应用' }}</h2>
      </div>
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
.nav-links a.active {
  background: #34495e;
}

.content {
  padding: 24px;
}

.home {
  max-width: 1200px;
  margin: 0 auto;
}

.home h2 {
  margin-bottom: 32px;
  color: #2c3e50;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.card {
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card h3 {
  margin-bottom: 12px;
  color: #34495e;
}

.card p {
  margin-bottom: 8px;
  color: #7f8c8d;
  font-size: 14px;
}

.global-state-demo {
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.global-state-demo h3 {
  margin-bottom: 16px;
  color: #34495e;
}

.global-state-demo p {
  margin-bottom: 16px;
  color: #7f8c8d;
}

.global-state-demo button {
  padding: 12px 24px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.global-state-demo button:hover {
  background: #2980b9;
}

#micro-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

#micro-container h2 {
  padding: 16px 24px;
  border-bottom: 1px solid #eee;
  margin: 0;
}
</style>