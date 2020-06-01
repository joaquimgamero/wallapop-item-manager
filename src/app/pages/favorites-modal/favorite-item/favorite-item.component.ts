import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/shared/item';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.sass'],
})
export class FavoriteItemComponent implements OnInit {
  @Input() item: Item;
  @Output() removedFromFavorites: EventEmitter<any> = new EventEmitter();

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {}

  onRemoveFromFavorites() {
    this.favoritesService.removeFromFavorites(this.item);
    this.removedFromFavorites.emit();
  }
}
