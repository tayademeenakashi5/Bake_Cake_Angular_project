import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output()
  searchResult: EventEmitter<string> = new EventEmitter<string>();
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchText: [''],
    });
  }

  ngOnInit(): void {}
  searchNote() {
    const searchText = this.searchForm.value.searchText;
    this.searchResult.emit(searchText);
  }
}
