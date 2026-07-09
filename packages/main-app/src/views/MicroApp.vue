<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  appName: string
}>()

const appTitle = computed(() => {
  const titles: Record<string, string> = {
    'react-app': 'React 微应用',
    'vue-app': 'Vue 微应用',
    'static-app': '静态微应用'
  }
  return titles[props.appName] || props.appName
})
</script>

<template>
  <div class="micro-app-container">
    <h2>{{ appTitle }}</h2>
    <div id="micro-container"></div>
  </div>
</template>

<style scoped>
.micro-app-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.micro-app-container h2 {
  padding: 16px 24px;
  border-bottom: 1px solid #eee;
  margin: 0;
}

#micro-container {
  width: 100%;
  min-height: 500px;
}
</style>