import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ItemManagerComponent } from './pages/item-manager/item-manager.component';
import { ItemComponent } from './pages/item-manager/item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { SearcherComponent } from './shared/searcher/searcher.component';
import { ItemListComponent } from './pages/item-manager/item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { PaginationComponent } from './shared/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    ItemManagerComponent,
    ItemListComponent,
    ItemComponent,
    SearcherComponent,
    SearchPipe,
    PaginationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
