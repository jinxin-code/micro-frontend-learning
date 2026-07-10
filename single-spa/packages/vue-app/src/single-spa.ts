import { createApp, type App } from 'vue'
import singleSpaVue from 'single-spa-vue'
import AppComponent from './App.vue'

let app: App | null = null

export async function bootstrap(props: unknown) {
  console.log('Vue app bootstrap:', props)
}

export async function mount(props: { domElement?: HTMLElement } & Record<string, unknown>) {
  console.log('Vue app mount:', props)
  
  const container = props.domElement || document.getElementById('app')
  if (!container) {
    throw new Error('No container found for Vue app')
  }
  
  app = createApp(AppComponent)
  app.mount(container)
  
  return {
    unmount: () => {
      app?.unmount()
      app = null
    }
  }
}

export async function unmount(props: { domElement?: HTMLElement }) {
  console.log('Vue app unmount:', props)
  app?.unmount()
  app = null
}