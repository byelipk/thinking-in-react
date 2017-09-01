export function groupBy(input, key) {
  return input.reduce((collection, item) => {
    (collection[item[key]] = collection[item[key]] || []).push(item);
    return collection;
  }, {});
}
