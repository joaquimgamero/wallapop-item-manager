import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.sass'],
})
export class SearcherComponent {
  searchValue: string;

  @Output() searched: EventEmitter<string> = new EventEmitter();

  onSearch(): void {
    this.searched.emit(this.searchValue);
  }
}
