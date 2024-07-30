class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }
// O(1)
    prepend(value){
        const node =  new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
// O(n)
    append(value){
        const node= new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }

    insert(value,index){
        if(index<0 || index>this.size){
            console.log("Index is wrong");
            return
        }if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }

    }

    removeFrom(index){
        if(index<0 || index>=this.size){
            return null
        }
        let removedNode
        if(index===0){
            removedNode=this.head
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removedNode=prev.next
            prev.next=removedNode.next
        }
        this.size--
        return removedNode.value
    }

    print(){
        if(this.isEmpty()){
            console.log("the list is empty");
        }else{
            let curr=this.head;
            let listValues=''
            while(curr){
               listValues += `${curr.value} `
                curr=curr.next
            }
                console.log(listValues);
        }
    }
}

const list = new LinkedList()

console.log("The list is empty? ", list.isEmpty());
console.log("The size of the list ", list.getSize());

list.print()

list.append(10)
list.print()

list.prepend(20)
list.prepend(30)
list.append(15)
list.append(5)


list.insert(100,0)
list.print()

list.insert(100,3)
list.print()

console.log(list.removeFrom(3));
list.print()


console.log(list.getSize());