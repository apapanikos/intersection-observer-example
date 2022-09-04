import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'io-elements-list',
  templateUrl: './elements-list.component.html',
  styleUrls: ['./elements-list.component.scss']
})
export class ElementsListComponent implements OnInit {
  items = [ ...Array(5).keys() ]

  constructor() { }

  ngOnInit(): void {
  }

}
