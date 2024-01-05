import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  items: Item[] = [];
  selectedItem: Item | null = null; // Track the selected item
  uniqueCategories: string[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe({
      next: (data) => {
        this.items = data;
        // Update uniqueCategories array
        for (const item of data) {
          if (!this.uniqueCategories.includes(item.category!)) {
            this.uniqueCategories.push(item.category!);
          }
        }
      },
      error: (error) => {
        alert('Failed to Fetch Items Due to Server Error !!');
      },
    });
  }

  receiveSearchResults(searchText: string) {
    this.itemService.getItems().subscribe({
      next: (data) => {
        if (searchText || searchText !== '') {
          this.items = data.filter((item) =>
            item.name?.toLowerCase().includes(searchText.toLowerCase())
          );
        } else {
          this.items = data;
        }
      },
      error: (error) => {
        alert('Failed to Fetch Items Due to Server Error !!');
      },
    });
  }

  // Function to handle selecting an item
  selectItem(item: Item) {
    this.selectedItem = item;
  }

  filterByCategory(category: string): void {
    console.log('Filter by category:', category);
  


    this.itemService.getItems().subscribe({
      next: (data) => {
        if (category || category !== '') {
          this.items = data.filter((item) => item.category === category);
        } else {
          this.items = data;
        }
      },
      error: (error) => {
        alert('Failed to Fetch Items Due to Server Error !!');
      },
    });
  }

  clearFilters(): void {
    console.log('Clear filters');
    let category = '';
    this.filterByCategory(category);
  }

}
