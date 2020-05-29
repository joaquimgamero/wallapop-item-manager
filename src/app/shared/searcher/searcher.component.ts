import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.sass'],
})
export class SearcherComponent implements OnInit {
  constructor() {}

  @Output() searched: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {}

  search(term: string): void {
    this.searched.emit(term);
  }
}
