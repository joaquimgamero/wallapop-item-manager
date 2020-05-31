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
  constructor(
    private favoritesService: FavoritesService,
    private dialogRef: MatDialogRef<FavoritesModalComponent>
  ) {}

  ngOnInit(): void {}

  get favorites(): Item[] {
    return this.favoritesService.favorites;
  }

  get userHasFavorites(): boolean {
    return this.favoritesService.userHasFavorites;
  }

  close(): void {
    this.dialogRef.close();
  }
}
