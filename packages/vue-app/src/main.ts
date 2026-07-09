import { bootstrap, mount, unmount } from './qiankun'
import './style.css'

if (!(window as unknown as Record<string, unknown>).__POWERED_BY_QIANKUN__) {
  import('./App.vue').then(({ default: App }) => {
    import('vue').then(({ createApp }) => {
      createApp(App).mount('#app')
    })
  })
}

export { bootstrap, mount, unmount }