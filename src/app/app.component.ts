import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FavoritesModalComponent } from './pages/favorites-modal/favorites-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Wallapop Item Manager';

  constructor(private dialog: MatDialog) {}

  onOpenFavorites() {
    this.dialog.open(FavoritesModalComponent, {
      minHeight: '80vh',
      maxHeight: '90vh',
      minWidth: '60vw',
      maxWidth: '95vw',
      autoFocus: true,
    });
  }
}
