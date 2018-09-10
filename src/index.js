class Sorter {
  constructor() {
    this.store = [];
    this.compareFunction = (left, right) => left - right;
  }

  add(element) {
    this.store.push(element);
  }

  at(index) {
    return this.store[index];
  }

  get length() {
    return this.store.length;
  }

  toArray() {
    return this.store;
  }

  sort(indices) {
    const sortedIndices = indices.sort();
    const arrayFromIndicex = this.store.filter((value, index) => indices.includes(index));
    const sortedArray = arrayFromIndicex.sort(this.compareFunction);
    sortedIndices.forEach((value, index) => { this.store[value] = sortedArray[index]; });
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
