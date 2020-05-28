import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass'],
})
export class ItemListComponent implements OnInit {
  items$ = this.itemsService.items$.pipe(
    tap(console.log),
    catchError((error) => {
      this.errorMessage = error;
      return of(null);
    })
  );

  errorMessage: string;

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {}
}
