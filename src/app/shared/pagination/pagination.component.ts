import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass'],
})
export class PaginationComponent {
  @Input() lastPage: number;
  @Input() firstPage: number;
  @Input() currentPage: number;

  @Output() changed: EventEmitter<number> = new EventEmitter();

  onPageChange() {
    this.normalizePage();
    this.changed.emit(this.currentPage);
  }

  onNext() {
    if (this.currentPage < this.lastPage) {
      this.currentPage++;
      this.changed.emit(this.currentPage);
    }
  }

  onPrevious() {
    if (this.firstPage < this.currentPage) {
      this.currentPage--;
      this.changed.emit(this.currentPage);
    }
  }

  onFirst() {
    this.currentPage = this.firstPage;
    this.changed.emit(this.currentPage);
  }

  onLast() {
    this.currentPage = this.lastPage;
    this.changed.emit(this.currentPage);
  }

  private normalizePage() {
    if (this.currentPage < this.firstPage) {
      this.currentPage = this.firstPage;
    }
    if (this.currentPage > this.lastPage) {
      this.currentPage = this.lastPage;
    }
  }
}
