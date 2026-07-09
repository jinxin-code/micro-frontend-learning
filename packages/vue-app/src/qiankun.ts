import { createApp, type App as VueApp } from 'vue'
import App from './App.vue'

let app: VueApp | null = null

export async function bootstrap() {
  console.log('Vue 微应用 bootstrap')
}

export async function mount(props: { container: HTMLElement }) {
  console.log('Vue 微应用 mount', props)
  const container = props.container || document.getElementById('app')
  if (container) {
    app = createApp(App)
    app.mount(container)
  }
}

export async function unmount() {
  console.log('Vue 微应用 unmount')
  if (app) {
    app.unmount()
    app = null
  }
}