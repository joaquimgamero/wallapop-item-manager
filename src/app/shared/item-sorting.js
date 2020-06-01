// Different sorting types for Item interfaces
export function sortItemsByTitle(items) {
  return items.sort((a, b) => a.title.localeCompare(b.title));
}

export function sortItemsByDescription(items) {
  return items.sort((a, b) => a.description.localeCompare(b.description));
}

export function sortItemsByEmail(items) {
  return items.sort((a, b) => a.email.localeCompare(b.email));
}

export function sortItemsByPriceAscending(items) {
  return items.sort((a, b) => a.price - b.price);
}

export function sortItemsByPriceDescending(items) {
  return items.sort((a, b) => b.price - a.price);
}
