import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Item } from 'src/app/shared/item';
import { ItemsService } from 'src/app/services/items.service';
import { SortType } from 'src/app/shared/sort-type.enum';
import { map, shareReplay } from 'rxjs/operators';

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
    this.items$ = this.itemsService.getItems().pipe(shareReplay());
  }

  onSearch(term: string) {
    this.lastSearchTerm = term;
  }

  // TODO: Lighten up getSortedItems responsability, separate to different sorts
  onSortBy(sortType: SortType) {
    switch (sortType) {
      case SortType.Title:
        this.sortItemsByTitle();
        break;
      case SortType.Description:
        this.sortItemsByDescription();
        break;
      case SortType.Email:
        this.sortItemsByEmail();
        break;
      case SortType.PriceAscending:
        this.sortItemsByPriceAscending();
        break;
      case SortType.PriceDescending:
        this.sortItemsByPriceDescending();
        break;
    }
  }

  onPageChanged(page: number) {
    console.log(page);
  }

  private sortItemsByTitle() {
    this.items$ = this.items$.pipe(
      map(
        (items) => items.sort((a, b) => a.title.localeCompare(b.title)),
        shareReplay()
      )
    );
  }

  private sortItemsByDescription() {
    this.items$ = this.items$.pipe(
      map((items) =>
        items.sort((a, b) => a.description.localeCompare(b.description))
      ),
      shareReplay()
    );
  }

  private sortItemsByEmail() {
    this.items$ = this.items$.pipe(
      map((items) => items.sort((a, b) => a.email.localeCompare(b.email))),
      shareReplay()
    );
  }

  private sortItemsByPriceAscending() {
    this.items$ = this.items$.pipe(
      map((items) => items.sort((a, b) => a.price - b.price)),
      shareReplay()
    );
  }

  private sortItemsByPriceDescending() {
    this.items$ = this.items$.pipe(
      map((items) => items.sort((a, b) => b.price - a.price)),
      shareReplay()
    );
  }
}
