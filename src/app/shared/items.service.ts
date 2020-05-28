import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';

import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  // MOCK
  // mock: Array<Item> = [
  //   {
  //     title: 'iPhone 6S Oro',
  //     description:
  //       'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.',
  //     price: 740,
  //     email: 'iphonemail@wallapop.com',
  //     image:
  //       'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png',
  //   },
  //   {
  //     title: 'iPhone 6S Oro',
  //     description:
  //       'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.',
  //     price: 740,
  //     email: 'iphonemail@wallapop.com',
  //     image:
  //       'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png',
  //   },
  //   {
  //     title: 'iPhone 6S Oro',
  //     description:
  //       'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.',
  //     price: 740,
  //     email: 'iphonemail@wallapop.com',
  //     image:
  //       'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png',
  //   },
  // ];
  // items$ = of(this.mock);

  private itemsUrl =
    'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  items$ = this.http.get<Item[]>(this.itemsUrl).pipe(
    map((res: any) => res.items),
    catchError(this.handleError)
  );

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    // Should send the error to remote logging infrastructure
    console.error(error);

    // Return an observable with a user-facing error message
    return throwError(`Error fetching data from server`);
  }
}
