import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementTileComponent } from './element-tile.component';

describe('ElementTileComponent', () => {
  let component: ElementTileComponent;
  let fixture: ComponentFixture<ElementTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
