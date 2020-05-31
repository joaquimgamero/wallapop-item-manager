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
      height: '70vh',
      width: '60vw',
      autoFocus: true,
    });
  }
}
