  class Queue{
    constructor(){
        this.items={}
        this.front=0
        this.rear=0
    }

    enqueue(element){
        this.items[this.rear]=element
        this.rear++
    }

    dequeue(){
        const item= this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.front-this.rear === 0
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear-this.front
    }

    print(){
        if(this.isEmpty()){
            return null
        }
    
            console.log(this.items)
        }

  }

  const queue = new Queue()

  queue.enqueue(10)
  queue.enqueue(20)
  queue.enqueue(30)

  queue.print()
