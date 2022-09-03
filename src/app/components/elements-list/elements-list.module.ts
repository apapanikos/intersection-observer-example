import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElementsListComponent } from './elements-list.component'
import { ElementTileModule } from '../element-tile/element-tile.module'



@NgModule({
  declarations: [
    ElementsListComponent
  ],
  imports: [
    CommonModule,
    ElementTileModule
  ],
  exports: [ElementsListComponent]
})
export class ElementsListModule { }
