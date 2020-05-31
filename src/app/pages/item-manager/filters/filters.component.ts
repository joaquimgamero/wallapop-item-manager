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

  pageNumber: number = 1;

  @Input() pageSize: number;

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
    console.log(sortType);
    this.sorted.emit(sortType);
  }

  onPageChange(page: number) {
    this.pageChanged.emit(page);
  }

  get lastPage(): number {
    if (!this.itemsService.items) return 0;

    if (!this.itemsService.items || this.itemsService.items.length === 0) {
      return 0;
    } else {
      return Math.ceil(this.itemsService.items.length / this.pageSize);
    }
  }

  get displayedPageNumber(): number {
    if (!this.itemsService.items) return 0;

    if (
      Math.ceil(this.itemsService.items.length / this.pageSize) <
      this.pageNumber
    ) {
      this.pageNumber = 1;
    }

    return this.pageNumber;
  }
}
