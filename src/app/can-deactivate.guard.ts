import { CanDeactivateFn } from '@angular/router';
import { OrderPageComponent } from './order-page/order-page.component';

export const canDeactivateGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component instanceof OrderPageComponent) {
    // Check for confirmation before allowing navigation
    const result = confirm(
      'You have not placed any order. Any details entered will be lost.\nAre you sure you want to leave this page?'
    );
    if (result) {
      return true; // Allow navigation after confirmation
    } else {
      return false; // Block navigation if confirmation is denied
    }
  }

  // Allow navigation for other components
  return true;
};
