import { Component, Input, OnInit } from '@angular/core';
import { VisibilityStatus } from 'src/app/enums/visibility-status.enum';

@Component({
  selector: 'io-element-tile',
  templateUrl: './element-tile.component.html',
  styleUrls: ['./element-tile.component.scss']
})
export class ElementTileComponent implements OnInit {
  @Input() item: any
  status: VisibilityStatus = VisibilityStatus.visible

  constructor() { }

  ngOnInit(): void {
  }

}
