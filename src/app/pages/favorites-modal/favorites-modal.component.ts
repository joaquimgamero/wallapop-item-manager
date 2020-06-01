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

  private applyFilters() {
    if (!this.userHasFavorites) return null;

    this.filteredFavorites = this.favorites;
    if (this.lastSearchTerm) this.filteredFavorites = this.filterBySearchTerm();
  }

  private filterBySearchTerm(): Item[] {
    if (!this.lastSearchTerm) return this.filteredFavorites;

    return this.filteredFavorites.filter((item) =>
      itemIncludesTerm(item, this.lastSearchTerm)
    );
  }
}
