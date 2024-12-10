class Queue {
    constructor(size) {
        this.items=[]
    }

    enqueue(value){
        this.items.push(value)
    }

    dequeue(){
        return this.items.shift()
    }

    peek(){
        return this.items[0]
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        if(this.isEmpty()){
            return null
        }
        return this.items.length
    }

    print(){
        if(this.isEmpty()){
            return null
        }
        
            console.log(this.items.toString());
      
    }
}

const queue = new Queue

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue(20)

console.log(queue.peek());

queue.print()
