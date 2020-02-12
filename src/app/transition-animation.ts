import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild, state
} from '@angular/animations';

export const transitionAnimation =
  // the fade-in/fade-out animation.
  // the trigger name does not matter, but it must match the name of the [@...] attribute in the template.
  trigger('simpleFadeAnimation', [

    // the "in" style determines the "resting" state of the element when it is visible.
    // the style name "in" must match the value of the [@simpleFadeAnimation]="'in'" attribute in the template
    state('in', style({opacity: 1})),

    // fade in when created. this could also be written as transition('void => *')
    transition(':enter', [
      // the styles start from this point when the element appears
      style({opacity: 0}),
      // and animate toward the "in" state above
      animate(800 )
    ]),

    // fade out when destroyed. this could also be written as transition('void => *')
    transition(':leave',
      // fading out uses a different syntax, with the "style" being passed into animate()
      animate(800, style({opacity: 0})))
  ]);

