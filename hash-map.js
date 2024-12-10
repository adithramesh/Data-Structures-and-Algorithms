class HashMap{
    constructor(size){
        this.table = new Array(size)
        this.size=size
    }

    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total = total + key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
            return
        }
        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                bucket[i][1]=value
            }
        }
        bucket.push([key,value])
    
    }

    get(key){
        const index = this.hash(key)
        let bucket = this.table[index]
        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                return bucket[i][1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            return
        }

        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                return bucket.splice(i,1)
            }
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            let bucket = this.table[i]
            if(bucket && bucket.length>0){
                console.log(i,bucket);
                
            }
        } 
    }
}

const table =  new HashMap(50)

table.set("name","Adith")
table.set("mane","Yoyo")
table.set("hobby","Cars")  
table.remove("mane")

console.log(table.get("name"));


table.display()