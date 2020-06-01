import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  @Output() favoritesOpened: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onOpenFavorites(): void {
    this.favoritesOpened.emit();
  }
}
