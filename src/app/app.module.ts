import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ElementsListModule } from './components/elements-list/elements-list.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
