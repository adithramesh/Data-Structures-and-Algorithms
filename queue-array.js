class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length===0
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.items[0].toString()
    }

    size(){
        return this.items.length
    }

    print(){
        if(this.isEmpty()){
            return null
        }
        console.log(this.items.toString());
    }


}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

console.log(queue.peek())
queue.print()
queue.dequeue()
console.log(queue.peek())
queue.print()