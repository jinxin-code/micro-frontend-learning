<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="vue-app">
    <div class="header">
      <h2>Vue 微应用 (single-spa)</h2>
      <p>这是一个基于 Vue 3 的微应用，通过 single-spa 加载</p>
    </div>
    <div class="counter">
      <h3>计数器</h3>
      <p class="count">当前计数: {{ count }}</p>
      <button class="btn" @click="count++">增加</button>
      <button class="btn btn-secondary" @click="count--">减少</button>
      <button class="btn btn-danger" @click="count = 0">重置</button>
    </div>
    <div class="features">
      <h3>特性</h3>
      <ul>
        <li>支持独立运行和作为微应用加载</li>
        <li>使用 vite-plugin-single-spa 构建</li>
        <li>输出 SystemJS 格式</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.vue-app {
  padding: 24px;
  min-height: 500px;
}

.header {
  margin-bottom: 32px;
}

.header h2 {
  color: #2c3e50;
  margin-bottom: 8px;
}

.header p {
  color: #7f8c8d;
}

.counter {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;
}

.counter h3 {
  color: #34495e;
  margin-bottom: 16px;
}

.count {
  font-size: 24px;
  font-weight: 600;
  color: #27ae60;
  margin-bottom: 16px;
}

.btn {
  padding: 12px 24px;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 12px;
  transition: background 0.3s;
}

.btn:hover {
  background: #1e8449;
}

.btn-secondary {
  background: #7f8c8d;
}

.btn-secondary:hover {
  background: #6c7a7a;
}

.btn-danger {
  background: #e74c3c;
}

.btn-danger:hover {
  background: #c0392b;
}

.features {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 8px;
}

.features h3 {
  color: #34495e;
  margin-bottom: 16px;
}

.features ul {
  list-style: none;
}

.features li {
  color: #7f8c8d;
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
}

.features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #3498db;
}
</style>