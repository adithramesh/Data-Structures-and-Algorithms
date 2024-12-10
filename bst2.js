class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        } else {
            this._insertNode(this.root, newNode )
        }
    }

    _insertNode(root, newNode){
        if (newNode.value > root.value) {
            if(root.right === null) root.right = newNode
             else this._insertNode(root.right, newNode)
        } else {
            if (root.left === null) root.left = newNode
            else this._insertNode(root.left, newNode)
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    levelOrder(){
        const queue =[]
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left) queue.push(curr.left)
                if(curr.right) queue.push(curr.right)    
        }
    }

    search(root,value){
        if(!root) return false
        if(value === root.value) return true
        if(value > root.value){
            return this.search(root.right, value)  
        } else {
            return this.search(root.left, value)
        }
    }  

    min(root){
        if (!root) return null 
        if(root.left === null) return root.value
        else return this.min(root.left)
    }

    max(root){
        if(!root) return false
        if(!root.right) return root.value
        else return this.max(root.right)
    }

    delete(value){
        this.root = this._deleteNode(this.root, value)
    }

    _deleteNode(root,value){
        if(!root) return root  
        if(value > root.value) root.right = this._deleteNode(root.right, value)
            else if(value < root.value) root.left= this._deleteNode(root.left, value)
                else {
                    if(!root.right && !root.left) return null
                    if(!root.left) return root.right
                    else if (!root.right) return root.left
                    
                    const minValue = this.min(root.right)
                    root.value = minValue
                    root.right = this._deleteNode(root.right, minValue)
                }
                return root
    }
}


const bst = new BinarySearchTree()
console.log(bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(15)
bst.insert(12)
bst.insert(20)  
console.log(bst.isEmpty());
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)


// console.log(bst.search(bst.root, 20))
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))

// bst.levelOrder()
bst.delete(3)
bst.levelOrder()