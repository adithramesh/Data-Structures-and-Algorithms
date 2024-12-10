class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this._bubbleUp();
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return max;
  }

  _bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[index]) break;

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let largest = index;

      if (
        leftChildIndex < length &&    
        this.heap[leftChildIndex] > this.heap[largest]
      ) {
        largest = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] > this.heap[largest]
      ) {
        largest = rightChildIndex;
      }
      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      index = largest;
    }
  }

  peek() {
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  display() {
    console.log(this.heap);
  }
}

const maxHeap = new MaxHeap();

maxHeap.insert(50);
maxHeap.insert(40);
maxHeap.insert(30);
maxHeap.insert(35);
maxHeap.insert(25);
maxHeap.insert(20);

maxHeap.display();

console.log(maxHeap.peek());

console.log(maxHeap.extractMax());

maxHeap.display();
maxHeap.extractMax();
maxHeap.display();

// let array = [50,40,30,35,25,20]

// function heapSort(array){
//     const maxHeap = new MaxHeap()

//     for(let value of array){
//         maxHeap.insert(value)
//     }
    
//     maxHeap.display()
//     for(let i = array.length-1; i >= 0; i--){
//         array[i]=maxHeap.extractMax()
//     }

//     return array

// }

// console.log(heapSort(array));
