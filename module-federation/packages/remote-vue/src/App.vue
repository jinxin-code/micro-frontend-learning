<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="remote-vue-app">
    <div class="header">
      <h3>Vue 远程组件 (Remote)</h3>
      <p>这是一个通过 Module Federation 暴露的 Vue 组件</p>
    </div>
    <div class="counter">
      <h4>计数器</h4>
      <p class="count">当前计数: {{ count }}</p>
      <button class="btn" @click="count++">增加</button>
      <button class="btn btn-secondary" @click="count--">减少</button>
      <button class="btn btn-danger" @click="count = 0">重置</button>
    </div>
    <div class="features">
      <h4>特性</h4>
      <ul>
        <li>通过 exposes 配置暴露组件</li>
        <li>与 Host 共享 Vue 依赖</li>
        <li>支持独立运行和作为远程组件加载</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.remote-vue-app {
  padding: 24px;
  min-height: 400px;
}

.header {
  margin-bottom: 24px;
}

.header h3 {
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

.counter h4 {
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

.features h4 {
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