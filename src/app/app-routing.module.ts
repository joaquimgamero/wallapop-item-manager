import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ItemManagerComponent } from './pages/item-manager/item-manager.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: '', component: ItemManagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
