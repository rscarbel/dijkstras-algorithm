class MinBinaryHeap {
  constructor() {
    this.values = [];
  };

  insert(value) {
    this.values.push(value);

    let index = this.values.length - 1

    while (index > 0) {
      let parentIndex = Math.floor((index - 1)/2);
      let parentValue = this.values[parentIndex];

      if (value <= parentValue) {
        break
      }

      this.values[index] = parentValue;
      this.values[parentIndex] = value;

      index = parentIndex;
    }
  }
};

export default MinBinaryHeap;