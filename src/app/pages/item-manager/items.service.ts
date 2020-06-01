import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Item } from 'src/app/shared/item';

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

  private handleError(error: HttpErrorResponse) {
    // Should send the error to remote logging infrastructure
    console.error(error);

    // Return an observable with a user-facing error message
    return throwError(`Error fetching data from server`);
  }
}
