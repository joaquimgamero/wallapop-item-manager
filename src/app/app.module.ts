import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ItemManagerComponent } from './pages/item-manager/item-manager.component';
import { ItemListComponent } from './shared/item-list/item-list.component';
import { ItemComponent } from './shared/item/item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    ItemManagerComponent,
    ItemListComponent,
    ItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
