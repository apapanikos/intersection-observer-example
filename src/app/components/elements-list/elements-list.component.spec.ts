import { ComponentFixture, TestBed } from '@angular/core/testing'
import { VisibilityStatus } from 'src/app/enums/visibility-status.enum'

import { ElementsListComponent } from './elements-list.component'

describe('ElementsListComponent', () => {
  let component: ElementsListComponent
  let fixture: ComponentFixture<ElementsListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsListComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should track by index', () => {
    expect(component.trackByIndex(0)).toEqual(0)
    expect(component.trackByIndex(1)).toEqual(1)
    expect(component.trackByIndex(2)).toEqual(2)
  })

  it('should set status on visibility change', () => {
    component.visibilityStatus = []
    component.onVisibilityChanged(0, VisibilityStatus.pending)
    expect(component.visibilityStatus[0]).toEqual(VisibilityStatus.pending)
    component.onVisibilityChanged(0, VisibilityStatus.visible)
    expect(component.visibilityStatus[0]).toEqual(VisibilityStatus.visible)
  })
})
