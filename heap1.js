class MaxHeap {
    constructor() {
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this._bubbleUp()
    }

    extractMax(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()

            const max = this.heap[0]
            this.heap[0] = this.heap.pop()
            this._heapDown()
            return max
    }

    _bubbleUp(){
        let index = this.heap.length - 1
        while(index>0){
            let parentIndex = Math.floor((index-1)/2)
            if(this.heap[index]<=this.heap[parentIndex]){
                break;
            }
            [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]]
            index = parentIndex
        }
    }

    _heapDown(){
        const length = this.heap.length
        let index = 0
        while(true){
            let leftIndex = (2*index) + 1
            let rightIndex = (2*index) + 2
            let largest = index

            if(leftIndex < length && this.heap[largest] < this.heap[leftIndex]){
                largest = leftIndex
            }
            if(rightIndex < length && this.heap[largest] < this.heap[rightIndex]){
                largest = rightIndex
            }
            if(index === largest) break

            [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]]
            index =largest

        }
    }

    display(){
        console.log(this.heap);
    }


}


// const maxHeap = new MaxHeap();
// maxHeap.display();
// maxHeap.insert(50);
// maxHeap.insert(40);
// maxHeap.insert(30);
// maxHeap.insert(35);
// maxHeap.insert(25);
// maxHeap.insert(20);
// maxHeap.display();
// maxHeap.extractMax();
// maxHeap.display();

let array= [50,40,30,35,25,20]

function heapSort(array){
    const maxHeap = new MaxHeap()

    for(let value of array){
        maxHeap.insert(value)
    }

    for(i=array.length-1;i>=0;i--){
        array[i]=maxHeap.extractMax()
    }

    return array

}

console.log(heapSort(array));

