export default (array) =>
  array.map((item) => item.name).sort((a, b) => a.localeCompare(b))
