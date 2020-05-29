import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/shared/item';
import { FavoritesService } from 'src/app/shared/favorites.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass'],
})
export class ItemComponent implements OnInit {
  @Input() item: Item;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {}

  toggleFavorite(): void {
    if (!this.isFavorite) {
      this.favoritesService.addToFavorites(this.item);
    } else {
      this.favoritesService.removeFromFavorites(this.item);
    }
  }

  get isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.item);
  }
}
