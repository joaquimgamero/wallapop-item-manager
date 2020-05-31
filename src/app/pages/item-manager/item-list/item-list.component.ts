import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Item } from 'src/app/shared/item';
import { ItemsService } from 'src/app/services/items.service';
import { SortType } from 'src/app/shared/sort-type.enum';
import { map } from 'rxjs/operators';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass'],
})
export class ItemListComponent implements OnInit {
  items$: Observable<Item[]>;

  lastSearchTerm: string;
  pageSize: number = 5;

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.items$ = this.itemsService.getItems();
  }

  onSearch(term: string) {
    this.lastSearchTerm = term;
  }

  // TODO: Lighten up getSortedItems responsability, separate to different sorts
  onSortBy(sortType: SortType) {
    switch (sortType) {
      case SortType.Title:
        this.sortItemsByTitle();
      case SortType.Description:
        this.sortItemsByDescription();
      case SortType.Email:
        this.sortItemsByEmail();
      case SortType.PriceAscending:
        this.sortItemsByPriceAscending();
      case SortType.PriceDescending:
        this.sortItemsByPriceDescending();
    }
  }

  onPageChanged(page: number) {
    console.log(page);
  }

  private sortItemsByTitle() {
    this.items$ = this.itemsService
      .getItems()
      .pipe(
        map((items) => items.sort((a, b) => a.title.localeCompare(b.title)))
      );
  }

  private sortItemsByDescription() {
    this.items$ = this.itemsService
      .getItems()
      .pipe(
        map((items) =>
          items.sort((a, b) => a.description.localeCompare(b.description))
        )
      );
  }

  private sortItemsByEmail() {
    this.items$ = this.itemsService
      .getItems()
      .pipe(
        map((items) => items.sort((a, b) => a.email.localeCompare(b.email)))
      );
  }

  private sortItemsByPriceAscending() {
    this.items$ = this.itemsService
      .getItems()
      .pipe(map((items) => items.sort((a, b) => a.price - b.price)));
  }

  private sortItemsByPriceDescending() {
    this.items$ = this.itemsService
      .getItems()
      .pipe(map((items) => items.sort((a, b) => b.price - a.price)));
  }
}
