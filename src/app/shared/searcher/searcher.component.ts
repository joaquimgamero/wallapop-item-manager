import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  filter,
  tap,
  map,
} from 'rxjs/operators';
import { Item } from '../item';

@Component({
  selector: 'searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.sass'],
})
export class SearcherComponent implements OnInit {
  @Input() searchTarget$: Observable<Item[]>;

  private searchTerms = new Subject<string>();

  constructor() {}

  ngOnInit(): void {
    // this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   // switch to new search observable each time the term changes
    //   tap((term: any) => console.log)
    //   // switchMap((term: any) => this.filterBySearchTerms(term))
    // );
  }

  search(term: string): void {
    this.searchTerms.next(term);

    this.filterBySearchTerms(term);
  }

  private filterBySearchTerms(term) {
    console.log(term);
  }
}
