// Determines if an item contains a given term in its internal data
export function itemIncludesTerm(item, term) {
  term = term.toLowerCase();
  const title = item.title.toLowerCase();
  const description = item.description.toLowerCase();
  const email = item.email.toLowerCase();
  const price = item.price.toString().toLowerCase();

  // Normalize string in order to help user find more results (e.g.: Cámara => camara)
  // ES6 String.prototype.normalize()
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
  const allItemInfo = title
    .concat(" ", description)
    .concat(" ", email)
    .concat(" ", price)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return allItemInfo.includes(term);
}
