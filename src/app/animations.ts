import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state('default', style({
    border: '2px solid #B2B6FF'
  })),
  state('highlighted', style({
    border: '4px solid #B2B6FF',
    filter: 'brightness (92%)'
})),
transition('default => highlighted', [
animate('200ms ease-out', style ({
  transform: 'scale(1.02)'
})),
animate(200)
])

])

export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    style ({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate(300, style ({
      opacy: 0
    }))
  ])
])

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style ({opacity: 0, width: 0}),
    animate('400ms ease-out', keyframes([
      style({offset: 0.5, opacity: 0, width: 0}),
      style({offset: 0.8, opacity: 0.5, width: '*'}),
      style({offset: 1, opacity: 1, width: '*'})
    ]))
  ]),
  transition(':leave', [
    animate('400ms cubic-bezier(1,-0.83,.05,1.49)', style({
      opacity: 0,
      width: 0}))
  ])
  ])
