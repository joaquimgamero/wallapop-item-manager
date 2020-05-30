import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../shared/item';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(values: Item[], term: string): unknown {
    if (!values) return null;
    if (!term) return values;

    return values.filter((item) => this.itemIncludesTerm(item, term));
  }

  private itemIncludesTerm(item: Item, term: string): boolean {
    if (!item) {
      return false;
    }

    term = term.toLowerCase();
    const title = item.title.toLowerCase();
    const description = item.description.toLowerCase();
    const email = item.email.toLowerCase();
    const price = item.price.toString().toLowerCase();

    // Normalize string in order to help user find more results (e.g.: Cámara => camara)
    //
    // ES6 String.prototype.normalize()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
    const allItemInfo = title
      .concat(' ', description)
      .concat(' ', email)
      .concat(' ', price)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    return allItemInfo.includes(term);
  }
}
