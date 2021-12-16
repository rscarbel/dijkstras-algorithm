class MinBinaryHeap {
  constructor() {
    this.values = [];
    this.size = 0;
  };

  insert(value) {
    this.values.push(value);

    let index = this.values.length - 1

    //balance with sibling {
    if (!(index % 2) && (index > 0)) {
      let siblingValue = this.values[index - 1];
      if (siblingValue > value) {
        this.values[index] = siblingValue;
        this.values[index - 1] = value;
        index --
      }
    }

    while (index > 0 ) {

      //balance with sibling
      if (index % 2) {
        let siblingValue = this.values[index + 1];
        if (siblingValue < value) {
          this.values[index] = siblingValue;
          this.values[index + 1] = value;
          index ++
        }
      } else {
        let siblingValue = this.values[index - 1];
        if (siblingValue > value) {
          this.values[index] = siblingValue;
          this.values[index - 1] = value;
          index --
        }
      }

      let parentIndex = Math.floor((index - 1)/2);
      let parentValue = this.values[parentIndex];

      if (value >= parentValue) {
        break;
      };

      this.values[index] = parentValue;
      this.values[parentIndex] = value;


      index = parentIndex;
    }
  }

  extract() {
    return
  }
};

export default MinBinaryHeap;