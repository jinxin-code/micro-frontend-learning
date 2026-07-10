<script setup lang="ts">
import { ref, onMounted } from 'vue'

const message = ref('')
const messages = ref<string[]>([])
const globalCount = ref(0)

function addMessage() {
  if (message.value.trim()) {
    messages.value.push(message.value)
    message.value = ''
  }
}

onMounted(() => {
  const qiankunWindow = window as unknown as Record<string, unknown>
  if (qiankunWindow.__POWERED_BY_QIANKUN__ && qiankunWindow.initGlobalState) {
    const actions = qiankunWindow.initGlobalState({})
    actions.onGlobalStateChange((state: Record<string, unknown>) => {
      if (state.count !== undefined) {
        globalCount.value = state.count as number
      }
    }, true)
  }
})
</script>

<template>
  <div class="vue-app">
    <h2>💚 Vue 微应用</h2>
    <p class="description">这是一个基于 Vue 3 + TypeScript 的微应用</p>
    
    <div class="message-board">
      <h3>留言板</h3>
      <input 
        v-model="message" 
        type="text" 
        placeholder="输入留言..." 
        @keyup.enter="addMessage"
      />
      <button @click="addMessage">添加</button>
      <ul>
        <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
      </ul>
    </div>

    <div class="global-state">
      <h3>全局状态计数</h3>
      <p>来自主应用的全局状态: <span class="value">{{ globalCount }}</span></p>
    </div>

    <div class="features">
      <h3>功能特点</h3>
      <ul>
        <li>支持独立运行 (localhost:8081)</li>
        <li>支持被 qiankun 主应用集成</li>
        <li>响应式设计</li>
        <li>Vue 3 Composition API</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.vue-app {
  padding: 24px;
  min-height: 100%;
}

.vue-app h2 {
  color: #2c3e50;
  margin-bottom: 16px;
}

.vue-app .description {
  color: #7f8c8d;
  margin-bottom: 24px;
}

.message-board, .global-state, .features {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.message-board h3, .global-state h3, .features h3 {
  color: #34495e;
  margin-bottom: 12px;
}

.message-board input {
  padding: 10px;
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
}

.message-board button {
  padding: 10px 20px;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.message-board button:hover {
  background: #2ecc71;
}

.message-board ul {
  list-style: none;
  margin-top: 16px;
}

.message-board li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  color: #7f8c8d;
}

.value {
  font-size: 24px;
  font-weight: bold;
  color: #3498db;
}

.features ul {
  list-style: none;
}

.features li {
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
  color: #7f8c8d;
}

.features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #27ae60;
  font-weight: bold;
}
</style>