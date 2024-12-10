const LinkedList =  require('./linked-list')

class LinkedListStack{
    constructor(){
        this.list = new LinkedList
    }

    push(value){
         this.list.prepend(value)
    }

    pop(){
       return this.list.removeFromFront()
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    peek(){
        return this.head.value
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        return this.list.print()
    }
}


const stack = new LinkedListStack

console.log(stack.isEmpty());

stack.push(10)
stack.push(20)
stack.push(30)
stack.print()

console.log(stack.getSize());
stack.pop(30)


stack.print()
