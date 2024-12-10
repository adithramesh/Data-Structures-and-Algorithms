// function quickSort(arr){
// if(arr.length<2){
//     return arr
// }

//     let pivot=arr[arr.length-1]
//     let leftArr=[]
//     let rightArr=[]

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>pivot){
//             rightArr.push(arr[i])
//         }else{
//             leftArr.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }

// const arr=[5,1,7,2,9]

// console.log(quickSort(arr));


// trie

class Node {
    constructor() {
        this.children = new Map()
        this.isEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        const curr = this.root
        for(let letter of word){
            if(!curr.children.has(letter)){
                curr.children.set(letter, new Node())
            }
            curr.children.get(letter)
        }
        curr.isEnd = true
    }


    search(word){
        if(!word) return false
        let curr = this.root
        for(let letter of word){
            if(!curr.children.has(letter)) return false
            curr.children.get(letter)
        }
        return curr.isEnd
    }

    searchPrefix(prefix){
        if(!prefix) return false
        let curr = this.root
        for(let letter of prefix){
            if(!curr.children.has(letter)) return false
            curr.children.get(letter)
        }
        return true

    }
}

const trie = new Trie()
trie.insert("rome")
console.log(trie.search("rome"));
console.log(trie.search("roke"));
console.log(trie.searchPrefix("ro"));


// graph

class Graph {
    constructor() {
        this.adgecancyList = {}
    }

    addVertex(vertex){
        if(!this.adgecancyList[vertex]){
            this.adgecancyList[vertex]= new Set()
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adgecancyList[vertex1]) this.addVertex(vertex1)
        if(!this.adgecancyList[vertex2]) this.addVertex(vertex2)
        this.adgecancyList[vertex1].add(vertex2)
        this.adgecancyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2){
        if( !vertex1 || !vertex2) return false
            return this.adgecancyList[vertex1].has(vertex2) && this.adgecancyList[vertex2].has(vertex1)
    }

    deleteVertex(vertex){
        if(!this.adgecancyList[vertex]) return
           for( let vertex1 of this.adgecancyList[vertex]){
            this.deleteEdges(vertex,vertex1)
           }
           delete this.adgecancyList[vertex]
    }

    deleteEdges(vertex1, vertex2){
        this.adgecancyList[vertex1].delete(vertex2)
        this.adgecancyList[vertex2].delete(vertex1)
    }

    display(){
        for(let vertex in this.adgecancyList){
            console.log(vertex,"->",[...this.adgecancyList[vertex]]);
        }
    }
}

const graph = new Graph()
graph.addEdge("A", "B")
graph.addEdge("B", "C")
graph.display()
console.log(graph.hasEdge("B","C"));
console.log(graph.hasEdge("A","C"));


// heap

class MaxHeap {
    constructor( ) {
        this.heap = []
    }

    insert(value){
             this.heap.push(value)
             this._bubbleUp()
    }

    _bubbleUp(){
        let index = this.heap.length-1
        
       while(index>0){
        const parentNode = Math.floor((index-1)/2)
        if(this.heap[index]<this.heap[parentNode]) break
        [this.heap[parentNode],this.heap[index]]=[this.heap[index],this.heap[parentNode]]
        index=parentNode
       }
    }

    extractMax(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()
        const max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this._heapifyDown()
        return max
    }

    _heapifyDown(){
        let index = 0
        const length = this.heap.length
        while(true){
            const leftIndex = (2*index)+1
            const rightIndex = (2*index)+2
            let largest = index
            if(leftIndex < length && this.heap[largest]<this.heap[leftIndex]) largest = leftIndex
            if(rightIndex < length && this.heap[largest]<this.heap[rightIndex]) largest = rightIndex
            if(index === largest) break
            [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]]
            index = largest
        }
       
    }

    display(){
        console.log(this.heap);
        
    }
}

const maxHeap = new MaxHeap()
maxHeap.insert(10)
maxHeap.insert(12)
maxHeap.insert(5)
maxHeap.insert(55)
maxHeap.insert(66)
maxHeap.insert(2)

maxHeap.display()
console.log(maxHeap.extractMax());
maxHeap.display()

function heapSort(array){
    const maxHeap =new MaxHeap()
    for(let value of array){
        maxHeap.insert(value)
    }

    for(let i=array.length-1;i>=0;i--){
        array[i]=maxHeap.extractMax()
    }
    return array
}

let array =[10,12,3,52,24,6,1,96]

console.log(heapSort(array));
