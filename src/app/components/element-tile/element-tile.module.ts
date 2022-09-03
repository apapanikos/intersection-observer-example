import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElementTileComponent } from './element-tile.component'



@NgModule({
  declarations: [
    ElementTileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ElementTileComponent]
})
export class ElementTileModule { }
