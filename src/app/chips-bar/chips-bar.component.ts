import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-chips-bar',
  templateUrl: './chips-bar.component.html',
  styleUrls: ['./chips-bar.component.css']
})
export class ChipsBarComponent {


  @Input() uniqueCategories: string[] = [];
  @Output() categoryClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() clearFiltersClicked: EventEmitter<void> = new EventEmitter<void>();
 

  constructor(private el: ElementRef , private renderer: Renderer2){}

  filterByCategory(category: string): void {
    this.categoryClicked.emit(category);
  }

  clearFilters(): void {
    this.clearFiltersClicked.emit();
  }

}
