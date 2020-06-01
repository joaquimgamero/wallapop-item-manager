import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Item } from 'src/app/shared/item';
import { itemIncludesTerm } from 'src/app/shared/normalized-search-filter';

@Component({
  selector: 'favorites-modal',
  templateUrl: './favorites-modal.component.html',
  styleUrls: ['./favorites-modal.component.sass'],
})
export class FavoritesModalComponent implements OnInit {
  lastSearchTerm: string;
  filteredFavorites: Item[];

  pageSize: number = 5;
  currentPage: number = 1;
  firstPage: number = 1;
  lastPage: number;
  itemsToShow: number;

  constructor(
    private favoritesService: FavoritesService,
    private dialogRef: MatDialogRef<FavoritesModalComponent>
  ) {}

  ngOnInit(): void {
    this.applyFilters();
  }

  get favorites(): Item[] {
    return this.favoritesService.favorites;
  }

  get favoritesQuantity(): number {
    return this.favorites.length || 0;
  }

  get userHasFavorites(): boolean {
    return this.favoritesService.userHasFavorites;
  }

  close(): void {
    this.dialogRef.close();
  }

  onSearch(term: string) {
    this.lastSearchTerm = term;
    this.applyFilters();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.applyFilters();
  }

  onItemUnfaved() {
    this.applyFilters();
  }

  private applyFilters() {
    if (!this.userHasFavorites) return null;

    this.filteredFavorites = this.favorites;
    if (this.lastSearchTerm) this.filteredFavorites = this.filterBySearchTerm();

    // Normalize pagination
    this.itemsToShow = this.filteredFavorites.length;
    this.lastPage = Math.ceil(this.itemsToShow / this.pageSize);
    if (this.currentPage < this.firstPage) this.currentPage = this.firstPage;
    if (this.currentPage > this.lastPage) this.currentPage = this.lastPage;
    this.filteredFavorites = this.showCurrentPage();
  }

  private showCurrentPage(): Item[] {
    const firstItemPosition =
      this.currentPage === 1 ? 0 : this.pageSize * (this.currentPage - 1);

    return this.filteredFavorites.slice(
      firstItemPosition,
      firstItemPosition + this.pageSize
    );
  }

  private filterBySearchTerm(): Item[] {
    if (!this.lastSearchTerm) return this.filteredFavorites;

    return this.filteredFavorites.filter((item) =>
      itemIncludesTerm(item, this.lastSearchTerm)
    );
  }
}
