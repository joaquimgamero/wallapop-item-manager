import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Item } from 'src/app/shared/item';

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
      this.itemIncludesTerm(item, this.lastSearchTerm)
    );
  }

  private itemIncludesTerm(item: Item, term: string): boolean {
    term = term.toLowerCase();
    const title = item.title.toLowerCase();
    const description = item.description.toLowerCase();
    const email = item.email.toLowerCase();
    const price = item.price.toString().toLowerCase();

    // Normalize string in order to help user find more results (e.g.: Cámara => camara)
    // ES6 String.prototype.normalize()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
    const allItemInfo = title
      .concat(' ', description)
      .concat(' ', email)
      .concat(' ', price)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    return allItemInfo.includes(term);
  }
}
