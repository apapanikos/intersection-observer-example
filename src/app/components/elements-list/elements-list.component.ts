import { Component, OnInit } from '@angular/core'
import { VisibilityStatus } from 'src/app/enums/visibility-status.enum'

@Component({
  selector: 'io-elements-list',
  templateUrl: './elements-list.component.html',
  styleUrls: ['./elements-list.component.scss']
})
export class ElementsListComponent implements OnInit {
  items = [ ...Array(1000).keys() ]
  visibilityStatus: {[key: number]: VisibilityStatus} = {}

  constructor() { }

  ngOnInit(): void {
  }

  trackByIndex(index: number) {
    return index
  }

  onVisibilityChanged(index: number, status: VisibilityStatus) {
    this.visibilityStatus[index] = status
  }

}
