import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input()
  item!: Item

  @Output() itemSelected: EventEmitter<Item> = new EventEmitter<Item>();
  constructor() { }

  ngOnInit(): void {
  }
}
