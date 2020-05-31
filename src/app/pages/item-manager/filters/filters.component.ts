import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SortType } from 'src/app/shared/sort-type.enum';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass'],
})
export class FiltersComponent implements OnInit {
  selectedOrder: SortType;
  orderByOptions = [];

  @Input() pageSize: number;
  @Input() listSize: number;
  @Input() currentPage: number;
  @Input() firstPage: number;
  @Input() lastPage: number;

  @Output() searched: EventEmitter<string> = new EventEmitter();
  @Output() sorted: EventEmitter<SortType> = new EventEmitter();
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.orderByOptions = Object.values(SortType);
  }

  onSearch(term: string) {
    this.searched.emit(term);
  }

  onSortBy(sortType: SortType) {
    this.sorted.emit(sortType);
  }

  onPageChange(page: number) {
    this.pageChanged.emit(page);
  }
}
