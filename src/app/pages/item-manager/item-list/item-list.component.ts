import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/shared/item';
import { ItemsService } from 'src/app/services/items.service';
import { SortType } from 'src/app/shared/sort-type.enum';
import { map, finalize, tap } from 'rxjs/operators';
import { itemIncludesTerm } from 'src/app/shared/normalized-search-filter';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass'],
})
export class ItemListComponent implements OnInit, OnDestroy {
  itemsSubscription: Subscription;
  allItems: Item[];
  filteredItems: Item[];

  lastSortType: SortType;
  lastSearchTerm: string;

  pageSize: number = 5;
  currentPage: number = 1;
  firstPage: number = 1;
  lastPage: number;
  itemsToShow: number;

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.itemsSubscription = this.itemsService
      .getItems()
      .pipe(
        tap(console.log),
        map((items) => {
          this.allItems = items;
          this.filteredItems = items;
        }),
        finalize(() => this.applyFilters())
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.itemsSubscription.unsubscribe();
  }

  onSearch(term: string) {
    this.lastSearchTerm = term;
    this.applyFilters();
  }

  onSortBy(sortType: SortType) {
    this.lastSortType = sortType;
    this.applyFilters();
  }

  onPageChanged(page: number) {
    this.currentPage = page;
    this.applyFilters();
  }

  private applyFilters(): void {
    this.filteredItems = this.allItems;

    if (this.lastSearchTerm) this.filteredItems = this.filterBySearchTerm();
    if (this.lastSortType) this.filteredItems = this.sortItems();

    // Normalize pagination
    this.itemsToShow = this.filteredItems.length;
    this.lastPage = Math.ceil(this.itemsToShow / this.pageSize);
    if (this.currentPage < this.firstPage) this.currentPage = this.firstPage;
    if (this.currentPage > this.lastPage) this.currentPage = this.lastPage;
    this.filteredItems = this.showCurrentPage();
  }

  private sortItemsByTitle(items: Item[]) {
    return items.sort((a, b) => a.title.localeCompare(b.title));
  }

  private sortItemsByDescription(items: Item[]) {
    return items.sort((a, b) => a.description.localeCompare(b.description));
  }

  private sortItemsByEmail(items: Item[]) {
    return items.sort((a, b) => a.email.localeCompare(b.email));
  }

  private sortItemsByPriceAscending(items: Item[]) {
    return items.sort((a, b) => a.price - b.price);
  }

  private sortItemsByPriceDescending(items: Item[]) {
    return items.sort((a, b) => b.price - a.price);
  }

  private sortItems(): Item[] {
    switch (this.lastSortType) {
      case SortType.Title:
        return this.sortItemsByTitle(this.filteredItems);
      case SortType.Description:
        return this.sortItemsByDescription(this.filteredItems);
      case SortType.Email:
        return this.sortItemsByEmail(this.filteredItems);
      case SortType.PriceAscending:
        return this.sortItemsByPriceAscending(this.filteredItems);
      case SortType.PriceDescending:
        return this.sortItemsByPriceDescending(this.filteredItems);
    }
  }

  private showCurrentPage(): Item[] {
    const firstItemPosition =
      this.currentPage === 1 ? 0 : this.pageSize * (this.currentPage - 1);

    return this.filteredItems.slice(
      firstItemPosition,
      firstItemPosition + this.pageSize
    );
  }

  private filterBySearchTerm(): Item[] {
    if (!this.lastSearchTerm) return this.filteredItems;

    return this.filteredItems.filter((item) =>
      itemIncludesTerm(item, this.lastSearchTerm)
    );
  }
}
