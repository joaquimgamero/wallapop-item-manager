import { Component, OnInit } from '@angular/core';

import { of, Observable } from 'rxjs';
import { catchError, map, tap, groupBy } from 'rxjs/operators';
import { Item } from 'src/app/shared/item';
import { ItemsService } from 'src/app/services/items.service';
import { SortType } from 'src/app/shared/sort-type.enum';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass'],
})
export class ItemListComponent implements OnInit {
  items$: Observable<Item[]>;
  lastSearchTerm: string;

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.items$ = this.itemsService.getItems();
  }

  onSearch(term: string) {
    this.lastSearchTerm = term;
  }

  onSortBy(sortType: SortType) {
    console.log(sortType);
    this.items$ = this.itemsService.getSortedItems(sortType);
  }
}
