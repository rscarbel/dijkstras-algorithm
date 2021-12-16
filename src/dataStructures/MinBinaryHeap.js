class MinBinaryHeap {
  constructor() {
    this.values = [];
    this.size = 0;
  };

  insert(value) {
    this.values.push(value);

    let index = this.values.length - 1

    //balance with sibling {
    if (
      !index % 2
      && index > 0
      ) {
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
    const min = this.values[0];

    const end = this.values.pop();

    if(this.values.length > 0){
      this.values[0] = end;

      let index = 0;
      const length = this.values.length;
      const check = this.values[0];

      while(true) {
        let leftIndex = 2 * index + 1;
        let rightIndex = 2 * index + 2;
        let leftChild, rightChild;

        let swap = null;

        if(leftIndex < length) {
          leftChild = this.values[leftIndex];

          if(leftChild < check) {
            swap = leftIndex;
          }
        }

        if(rightIndex < length) {
          rightChild = this.values[rightIndex];

          if(
            (swap === null && rightChild < check) ||
            (swap !== null && rightChild < leftChild)
          ) {
            swap = rightIndex;
          }
        }

        if(swap === null) {
          break;
        }

        this.values[index] = this.values[swap];
        this.values[swap] = check;
        index = swap;
      }
    }
    return min
  }
};

export default MinBinaryHeap;