<script setup lang="ts">
import { ref, inject } from 'vue'

const actions = inject('GlobalStateActions') as {
  setGlobalState: (state: Record<string, unknown>) => void
  onGlobalStateChange: (callback: (state: Record<string, unknown>) => void) => void
}

const count = ref(0)

function updateGlobalCount() {
  count.value++
  if (actions) {
    actions.setGlobalState({ count: count.value })
  }
}
</script>

<template>
  <div class="home">
    <h2>欢迎来到 Qiankun 微前端教学项目</h2>
    <div class="cards">
      <div class="card">
        <h3>🏠 主应用</h3>
        <p>基于 Vue 3 + TypeScript 构建</p>
        <p>负责微应用的注册、加载和管理</p>
      </div>
      <div class="card">
        <h3>⚛️ React 微应用</h3>
        <p>运行在 localhost:3000</p>
        <p>演示 React 技术栈接入 qiankun</p>
      </div>
      <div class="card">
        <h3>💚 Vue 微应用</h3>
        <p>运行在 localhost:8081</p>
        <p>演示 Vue 技术栈接入 qiankun</p>
      </div>
      <div class="card">
        <h3>📄 静态微应用</h3>
        <p>运行在 localhost:8082</p>
        <p>演示纯 HTML/JS 最简接入方式</p>
      </div>
    </div>
    <div class="global-state-demo">
      <h3>🌐 全局状态管理演示</h3>
      <p>点击按钮更新全局状态，所有微应用都能收到通知</p>
      <button @click="updateGlobalCount">更新全局计数: {{ count }}</button>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
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
</style>