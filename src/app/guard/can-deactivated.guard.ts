import { CanDeactivateFn, Router } from '@angular/router';

export const canDeactivatedGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
