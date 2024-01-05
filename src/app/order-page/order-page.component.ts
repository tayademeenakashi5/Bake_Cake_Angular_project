import { Component, HostListener, Input } from '@angular/core';
import { Item } from '../models/item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SimpleDialogComponent } from './simple-dialog.component';
@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css'],
})
export class OrderPageComponent {
  item: Item | undefined;
  itemId: number | undefined;
  orderForm: FormGroup;
  

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    const today = new Date();
    // Create an empty form in the constructor
    this.orderForm = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(3)]],
      customerEmail: ['', [Validators.required, Validators.email]],
      itemName: ['{{ item?.name }}', Validators.required],
      orderQuantity: ['', [Validators.required, Validators.min(1)]],
      orderDate: [today, Validators.required],
      totalBill: ['', Validators.required],
      contactNumber: [
        '',
        [Validators.required, Validators.pattern(/^\d{10}$/)],
      ],
      customerAddress: this.fb.group({
        //houseNumber: ['', Validators.required],
        //streetName: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        
      }),
    });
  }

  ngOnInit(): void {
    // Subscribe to the route parameters to get the item ID
    this.route.paramMap.subscribe((params) => {
      this.itemId = Number(params.get('id'));
      if (this.itemId) {
        // Call the service to fetch the item by ID
        this.itemService.getItemById(this.itemId).subscribe({
          next: (data) => {
            this.item = data;
            // Update the form control with the item name
            this.orderForm.get('itemName')?.setValue(this.item?.name || '');
          },
          error: (error) => {
            console.error('Failed to fetch item:', error);
          },
        });
      }
    });

    // Subscribe to value changes in orderQuantity to update totalBill
    this.orderForm.get('orderQuantity')?.valueChanges.subscribe((value) => {
      this.updateTotalBill(value);
    });
  }

  updateTotalBill(quantity: number): void {
    // Update totalBill based on the item's price and the entered quantity
    const itemPrice = this.item?.price || 0;
    this.orderForm.get('totalBill')?.setValue(itemPrice * quantity);
  }

  onSubmit() {
    console.log('Form submitted:', this.orderForm.value);

    const orderData = this.orderForm.value;

    // Call the service to save the order
    this.itemService.saveOrder(orderData).subscribe({
      next: (response) => {
        console.log('Order saved successfully:', response);

        // Open a simple dialog with the total bill and customer name
        this.dialog.open(SimpleDialogComponent, {
          data: {
            totalBill: orderData.totalBill,
            customerName: orderData.customerName,
          },
        });
      },
      error: (error) => {
        console.error('Failed to save order:', error);
      },
    });
    
  }


}
