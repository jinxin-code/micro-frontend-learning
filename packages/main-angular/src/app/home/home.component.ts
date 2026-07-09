import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  count = 0

  updateGlobalCount(): void {
    this.count++
    const actions = (window as unknown as Record<string, unknown>).qiankun?.initGlobalState({})
    if (actions) {
      actions.setGlobalState({ count: this.count })
    }
  }
}