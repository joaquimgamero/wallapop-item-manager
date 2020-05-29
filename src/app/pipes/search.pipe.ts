import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../shared/item';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(values: Item[], term: string): unknown {
    if (!term) {
      return values;
    }

    return values.filter((item) => this.itemIncludesTerm(item, term));
  }

  private itemIncludesTerm(item: Item, term: string): boolean {
    if (!item) {
      return false;
    }

    term = term.toLowerCase();
    const title = item.title.toLowerCase();
    const description = item.description.toLowerCase();
    const price = item.price.toString().toLowerCase();

    return (
      title.includes(term) || description.includes(term) || price.includes(term)
    );
  }
}
