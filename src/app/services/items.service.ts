import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Item } from '../shared/item';
import { SortType } from '../shared/sort-type.enum';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  items: Item[];

  private itemsUrl =
    'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    if (this.items) return of(this.items);

    return this.http.get<Item[]>(this.itemsUrl).pipe(
      map((res: any) => {
        this.items = res.items;

        // Add id property
        this.items.forEach((item: Item, index: number) => {
          item.id = index;
        });

        return this.items;
      }),
      catchError(this.handleError)
    );
  }

  // TODO: Lighten up getSortedItems responsability, separate to different sorts
  public getSortedItems(sortType: SortType): Observable<Item[]> {
    if (!this.items) this.getItems();

    switch (sortType) {
      case SortType.Title:
        return of(
          this.items.sort(function (a, b) {
            return a.title.localeCompare(b.title);
          })
        );
      case SortType.Description:
        return of(
          this.items.sort(function (a, b) {
            return a.description.localeCompare(b.description);
          })
        );
      case SortType.Email:
        return of(
          this.items.sort(function (a, b) {
            return a.email.localeCompare(b.email);
          })
        );
      case SortType.PriceAscending:
        return of(
          this.items.sort(function (a, b) {
            return a.price - b.price;
          })
        );
      case SortType.PriceDescending:
        return of(
          this.items.sort(function (a, b) {
            return b.price - a.price;
          })
        );
    }
  }

  private handleError(error: HttpErrorResponse) {
    // Should send the error to remote logging infrastructure
    console.error(error);

    // Return an observable with a user-facing error message
    return throwError(`Error fetching data from server`);
  }
}
