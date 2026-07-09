import { Component, OnInit, NgZone } from '@angular/core'
import { registerMicroApps, start, initGlobalState } from 'qiankun'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 主应用'
  currentPath = ''

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      const microApps = [
        {
          name: 'react-app',
          entry: '//localhost:3000',
          container: '#micro-container',
          activeRule: '/react'
        },
        {
          name: 'vue-app',
          entry: '//localhost:8081',
          container: '#micro-container',
          activeRule: '/vue'
        },
        {
          name: 'static-app',
          entry: '//localhost:8082',
          container: '#micro-container',
          activeRule: '/static'
        }
      ]

      const actions = initGlobalState({
        count: 0,
        user: { name: 'Guest', role: 'visitor' },
        theme: 'light'
      })

      actions.onGlobalStateChange((state: Record<string, unknown>) => {
        console.log('Global state changed:', state)
      })

      registerMicroApps(microApps, {
        beforeLoad: (app) => {
          console.log('before load:', app.name)
          return Promise.resolve()
        },
        beforeMount: (app) => {
          console.log('before mount:', app.name)
          return Promise.resolve()
        },
        afterMount: (app) => {
          console.log('after mount:', app.name)
          return Promise.resolve()
        },
        beforeUnmount: (app) => {
          console.log('before unmount:', app.name)
          return Promise.resolve()
        },
        afterUnmount: (app) => {
          console.log('after unmount:', app.name)
          return Promise.resolve()
        }
      })

      start({
        sandbox: { strictStyleIsolation: true }
      })
    })
  }

  navigate(path: string): void {
    this.currentPath = path
  }
}