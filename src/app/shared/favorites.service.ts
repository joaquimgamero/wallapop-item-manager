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
    if (!this.isFavorite(item)) {
      this.favorites.push(item);
    }
    console.log(this.favorites);
  }

  public removeFromFavorites(item: Item): void {
    if (this.isFavorite(item)) {
      this.favorites = this.favorites.filter(function (fav) {
        return fav.id !== item.id;
      });
    }
  }

  public isFavorite(item: Item): boolean {
    return this.favorites.some(function (fav) {
      return fav.id === item.id;
    });
  }
}
