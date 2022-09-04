import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElementTileComponent } from './element-tile.component'
import { LoaderModule } from '../loader/loader.module'



@NgModule({
  declarations: [
    ElementTileComponent
  ],
  imports: [
    CommonModule,
    LoaderModule
  ],
  exports: [ElementTileComponent]
})
export class ElementTileModule { }
