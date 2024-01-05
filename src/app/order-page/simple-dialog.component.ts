import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-order-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>Order Confirmation</h2>
    <mat-dialog-content>
      <h4>Hi {{ data.customerName }}</h4>
      <p>Your order total is: {{ data.totalBill | currency : 'INR' }}</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
})
export class SimpleDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { totalBill: number; customerName: string }
  ) {}
}
