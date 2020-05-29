import { Component, OnInit } from '@angular/core';

import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Item } from 'src/app/shared/item';
import { ItemsService } from 'src/app/services/items.service';

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
    this.items$ = this.loadItems();
  }

  loadItems(): Observable<Item[]> {
    return this.itemsService.getItems();
  }

  onSearched(term: string) {
    this.lastSearchTerm = term;
  }
}
