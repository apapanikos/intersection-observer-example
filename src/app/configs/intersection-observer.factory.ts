import { Subject } from "rxjs"
import { Observable } from "rxjs"
import { debounceTime, filter } from "rxjs"
import { VisibilityStatus } from "../enums/visibility-status.enum"

const isIntersecting = (entry: IntersectionObserverEntry) => entry.isIntersecting || entry.intersectionRatio > 0

const isVisible = async (element: HTMLElement) => {
  return new Promise(resolve => {
    const observer = new IntersectionObserver(([entry]) => {
      resolve(entry.isIntersecting)
      observer.disconnect()
    })
    observer.observe(element)
  })
}

export const interSectionObserverSub = (
  element: HTMLElement,
  config: IntersectionObserverInit,
  debounce = 0
) =>
  new Observable<VisibilityStatus>(subscriber => {
    const subject$ = new Subject<{
      entry: IntersectionObserverEntry
      observer: IntersectionObserver
    }>()

    const intersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (isIntersecting(entry)) subject$.next({ entry, observer })
      })
    }, config)

    subject$.subscribe(() => {
      subscriber.next(VisibilityStatus.pending)
    })

    subject$.pipe(
      debounceTime(debounce),
      filter(Boolean)
    ).subscribe(async ({ entry, observer }) => {
      const isEntryVisible = await isVisible(entry.target as HTMLElement)

      if (isEntryVisible) {
        subscriber.next(VisibilityStatus.visible)
        observer.unobserve(entry.target)
      } else {
        subscriber.next(VisibilityStatus.notVisible)
      }
    })

    intersectionObserver.observe(element)

    return {
      unsubscribe() {
        intersectionObserver.disconnect()
        subject$.unsubscribe()
      }
    }
  })