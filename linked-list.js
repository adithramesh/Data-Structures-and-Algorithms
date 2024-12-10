class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head=node
        this.tail=node
    }else{
        node.next=this.head
        this.head=node
    }
    this.size++
}

append(value){
    const node= new Node(value)
    if(this.isEmpty()){
        this.head=node
        this.tail=node
    }else{
        this.tail.next=node
        this.tail=node
    }
    this.size++
    
}

removeFromFront(){
    if(this.isEmpty()){
        return null
    }else{
        const value= this.head.value
        this.head=this.head.next
        this.size--
        return value
    }
}

removeFromEnd(){
    if(this.isEmpty()){
        return null
    }else{
        const value=this.tail.value
        if(this.size===1){
            this.head=null
            this.tail=null
        } else{
            let prev=this.head
            while(prev.next !== this.tail){
                prev=prev.next 
            }
            prev.next=null
            this.tail=prev
        }
        this.size--
        return value
    }
}
middle(){
    const node= new Node
    let fast=this.head
    let slow= this.head

    while(fast.next){
        slow=slow.next
        fast=fast.next.next
    }
    return slow
}

print(){

    if(this.isEmpty()){
        console.log("the list is empty");
    }else{
        let curr=this.head
        let listValues=''
        while(curr){
            listValues += `${curr.value} `
            curr=curr.next
        }
        console.log(listValues);
    }
}

}
module.exports = LinkedList

// const list = new LinkedList

// list.prepend(10)
// list.append(100)
// list.prepend(5)
// list.append(55)
// list.append(66)
// console.log("list size ",list.getSize());
// list.print()

// list.removeFromFront()
// list.print()

// list.removeFromEnd()
// list.print()

