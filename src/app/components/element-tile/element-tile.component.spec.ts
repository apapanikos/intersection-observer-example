import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { IntersectionObserverDirective } from 'src/app/directives/intersection-observer.directive'

import { ElementTileComponent } from './element-tile.component'

describe('ElementTileComponent', () => {
  let component: ElementTileComponent
  let fixture: ComponentFixture<ElementTileComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementTileComponent, IntersectionObserverDirective ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementTileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
