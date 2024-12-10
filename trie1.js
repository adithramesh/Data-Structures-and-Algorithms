class Node {
    constructor() {
        this.children = new Map()
        this.isEnd = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word){
        let currentNode = this.root
        for(let letter of word){
            if(!currentNode.children.has(letter)){
                currentNode.children.set(letter, new Node())
            }

            currentNode =currentNode.children.get(letter)
        }
        currentNode.isEnd = true
    }

    search(word){
        if(!word.length) return false
        let currentNode = this.root
        for(let letter of word){
            if(!currentNode.children.has(letter)) return false
            currentNode = currentNode.children.get(letter)
        }
        return currentNode.isEnd
    }
  
    searchPrefix(word){
        let currentNode = this.root
        if(!word.length) return false
        for(let letter of word){
            if(!currentNode.children.has(letter)) return false
            currentNode = currentNode.children.get(letter)
        }
        return true
    }
 
}

const trie = new Trie()
trie.insert("rome")
console.log(trie.search("rome"));
console.log(trie.search("roke"));
console.log(trie.searchPrefix("ro"));
