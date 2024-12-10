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
// 0(n)
    removeValue(value){
        if(this.isEmpty()){
            console.log("list is empty");
            return null
        }if(this.head.value===value){
            this.head=this.head.next
            this.size--
            return value
        }else{
            let prev=this.head
            while(prev.next && prev.next.value !== value){
                prev=prev.next
            }
            if(prev.next){
                const removedNode=prev.next
                prev.next=removedNode.next
                this.size--
                return value
            }
                return null
            
        }
    }

    search(value){
        if(this.isEmpty()) {
            console.log("the list is empty");
            return -1
        } 
            let curr = this.head
            let i = 0
            while(curr) {
                if(curr.value === value) {
                    console.log("the position of the searched value is ", i);
                    return i
                } 
                    curr = curr.next
                    i++

                    
            }
            return null
        
    }

    reverse(){
        let prev= null
        let curr = this.head
       
        while(curr){
          let next=curr.next
          curr.next=prev
          prev=curr
          curr=next  
        }
       this.head=prev
    }

    recursivereverse(){
        let prev=null
        let curr=this.head

        function rec(curr){
            if(curr===null){
                return prev
            }
            let next=curr.next
            curr.next=prev
            prev=curr
            return rec(next)
        }

        
        rec(curr)
        this.head=prev
    }
    middle(){
        const node= new Node
        let fast=this.head
        let slow= this.head
    
        while(fast.next && fast.next.next){
            slow=slow.next
            fast=fast.next.next
        }
        return slow.value
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


// console.log("removeValue",list.removeValue(30));
// list.print()


console.log(list.getSize());

// list.search(20)
// list.search(10)

console.log(list.search(200));
// list.search(100)

list.print()
// list.reverse()
list.recursivereverse()
list.print()
  

console.log("Middle:", list.middle());
