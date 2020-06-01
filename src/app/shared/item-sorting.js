// Different sorting types for Item interfaces
sortItemsByTitle = function (items) {
  return items.sort((a, b) => a.title.localeCompare(b.title));
};

sortItemsByDescription = function (items) {
  return items.sort((a, b) => a.description.localeCompare(b.description));
};

sortItemsByEmail = function (items) {
  return items.sort((a, b) => a.email.localeCompare(b.email));
};

sortItemsByPriceAscending = function (items) {
  return items.sort((a, b) => a.price - b.price);
};

sortItemsByPriceDescending = function (items) {
  return items.sort((a, b) => b.price - a.price);
};
