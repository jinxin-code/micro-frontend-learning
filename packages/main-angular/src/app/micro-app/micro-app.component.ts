import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-micro-app',
  templateUrl: './micro-app.component.html',
  styleUrls: ['./micro-app.component.css']
})
export class MicroAppComponent {
  title = ''

  constructor(private router: Router) {
    const path = router.url
    const titles: Record<string, string> = {
      '/react': '⚛️ React 微应用',
      '/vue': '💚 Vue 微应用',
      '/static': '📄 静态微应用'
    }
    this.title = titles[path] || path
  }
}