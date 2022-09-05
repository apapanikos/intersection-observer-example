import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { IntersectionObserverDirective } from './intersection-observer.directive'

describe('IntersectionObserverDirective', () => {
  let elRef: ElementRef

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ElementRef, useValue: {nativeElement: {}}}]
    })

    elRef = TestBed.get(ElementRef)
  })

  it('should create an instance', () => {
    const directive = new IntersectionObserverDirective(elRef)
    expect(directive).toBeTruthy()
  })

  it('should start observing entries', () => {
    const directive = new IntersectionObserverDirective(elRef)
    directive.ngOnInit()
  })
})
