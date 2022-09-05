import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElementsListComponent } from './elements-list.component'
import { ElementTileModule } from '../element-tile/element-tile.module'
import { IntersectionObserverDirective } from 'src/app/directives/intersection-observer.directive'



@NgModule({
  declarations: [
    ElementsListComponent,
    IntersectionObserverDirective
  ],
  imports: [
    CommonModule,
    ElementTileModule,
  ],
  exports: [ElementsListComponent]
})
export class ElementsListModule { }
