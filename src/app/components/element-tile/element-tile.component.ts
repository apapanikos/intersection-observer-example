import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'io-element-tile',
  templateUrl: './element-tile.component.html',
  styleUrls: ['./element-tile.component.scss']
})
export class ElementTileComponent implements OnInit {
  @Input() item: any

  constructor() { }

  ngOnInit(): void {
  }

}
