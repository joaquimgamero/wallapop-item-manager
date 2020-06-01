import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ItemManagerComponent } from './pages/item-manager/item-manager.component';
import { FavoritesModalComponent } from './pages/favorites-modal/favorites-modal.component';

const routes: Routes = [
  { path: '', component: ItemManagerComponent },
  // { path: 'favorites', component: FavoritesModalComponent, outlet: 'modal' },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
