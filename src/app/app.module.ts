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
import { FiltersComponent } from './pages/item-manager/filters/filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
