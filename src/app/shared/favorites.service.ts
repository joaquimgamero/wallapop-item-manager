import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favorites: Item[];

  constructor() {
    this.favorites = [];
  }

  public addToFavorites(item: Item): void {
    if (!this.isFavorite(item.id)) {
      this.favorites.push(item);
    }
  }

  public removeFromFavorites(item: Item): void {
    if (this.isFavorite(item.id)) {
      this.favorites = this.favorites.filter(function (fav) {
        return fav.id !== item.id;
      });
    }
  }

  public isFavorite(id: number): boolean {
    return this.favorites.some(function (fav) {
      return fav.id === id;
    });
  }
}
