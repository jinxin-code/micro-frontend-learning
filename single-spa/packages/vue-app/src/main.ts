import './style.css'

if (!window.singleSpaNavigate) {
  import('./App.vue').then(({ default: App }) => {
    import('vue').then(({ createApp }) => {
      createApp(App).mount('#app')
    })
  })
}

export { bootstrap, mount, unmount } from './single-spa'