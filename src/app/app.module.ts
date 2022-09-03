import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsListModule } from './components/elements-list/elements-list.module';
import { IntersectionObserverDirective } from './directives/intersection-observer.directive';

@NgModule({
  declarations: [
    AppComponent,
    IntersectionObserverDirective
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
