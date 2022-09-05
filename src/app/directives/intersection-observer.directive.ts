import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core'
import { debounceTime, filter, map, of, shareReplay, Subject, switchMap, takeUntil, withLatestFrom } from 'rxjs'
import { interSectionObserverSub } from '../configs/intersection-observer.factory'
import { VisibilityStatus } from '../enums/visibility-status.enum'

@Directive({
  selector: '[ioIntersectionObserver]'
})
export class IntersectionObserverDirective implements OnInit, AfterViewInit, OnDestroy {
  @Input() debounce = 0
  @Input() rootMargin = '0px'
  @Input() root: HTMLElement
  @Input() threshold: number | number[]
  @Output() visibilityChange = new EventEmitter<VisibilityStatus>()
  private subject$ = new Subject<{entry: IntersectionObserverEntry, observer: IntersectionObserver}>()
  private intersectionObserver: IntersectionObserver | undefined

  private isVisible = (element: HTMLElement) => {
      const subject$ = new Subject<boolean>()
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) subject$.next(true)
        observer.disconnect()
      })
      observer.observe(element)
    return subject$.asObservable()
  }

  constructor(
    private elRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.createObserver()
  }

  ngAfterViewInit(): void {
    this.startObservation()
  }

  private createObserver() {
    const config = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    }

    const isIntersecting = (entry: IntersectionObserverEntry) => entry.isIntersecting || entry.intersectionRatio > 0

    this.intersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (isIntersecting(entry)) this.subject$.next({ entry, observer })
      })
    }, config)
  }

  private startObservation() {
    if (!this.intersectionObserver) return

    this.intersectionObserver.observe(this.elRef.nativeElement)

    this.subject$.subscribe(() => this.visibilityChange.emit(VisibilityStatus.pending))

    this.subject$.pipe(
      debounceTime(this.debounce),
      filter(Boolean),
      switchMap(({entry, observer}) => this.isVisible(entry.target as HTMLElement).pipe(
        map(isStillVisible => ({isStillVisible, observer, entry})))
      )
    ).subscribe(({isStillVisible, observer, entry}) => {
        if (isStillVisible) {
          this.visibilityChange.emit(VisibilityStatus.visible)
          observer.unobserve(entry.target)
        } else {
          this.visibilityChange.emit(VisibilityStatus.notVisible)
        }
    })
  }


  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect()
      this.intersectionObserver = undefined
    }
    this.subject$.next(null)
    this.subject$.complete()
  }

}
