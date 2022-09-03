import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElementsListComponent } from './elements-list.component'



@NgModule({
  declarations: [
    ElementsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ElementsListComponent]
})
export class ElementsListModule { }
