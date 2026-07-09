import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { MicroAppComponent } from './micro-app/micro-app.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'react', component: MicroAppComponent },
  { path: 'vue', component: MicroAppComponent },
  { path: 'static', component: MicroAppComponent }
]

@NgModule({
  declarations: [AppComponent, HomeComponent, MicroAppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}