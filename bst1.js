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
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        if(newNode.value > root.value){
            if(root.right === null){
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        } else {
            if(root.left === null){
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        } else {
            if(value === root.value){
                return true
            } else if (value > root.value) {
                return this.search(root.right, value)
            } else {
                return this.search(root.left, value)
            }
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

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
           const  curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            } 
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
         return root.value   
        } else {
            return this.max(root.right)
        }
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root.value===null){
            return root
        }
        if(value <root.value){
            root.left=this.deleteNode(root.left,value)
        } else if(value>root.value){
            root.right=this.deleteNode(root.right, value)
        } else {
            if(!root.right && !root.left){
                return null
            } if (!root.right){
                return root.left
            } else if(!root.left){
                return root.right
            }
            const minValue =this.min(root.right)
            root.value = minValue
            root.right = this.deleteNode(root.right, minValue)
        }
        return root
    }

    
}


const bst   = new BinarySearchTree();

console.log("Is tree empty?",bst.isEmpty(0));

bst.insert(10)
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(15)
bst.insert(12)
bst.insert(20)  
console.log("Is tree empty?",bst.isEmpty(0));
console.log(bst.search(bst.root,7))

// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)



console.log(bst.min(bst.root));
console.log(bst.max(bst.root));

bst.levelOrder()
bst.delete(15)
bst.levelOrder()