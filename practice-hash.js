class HashMap {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total=total+key.charCodeAt(i)
        }
        return total%this.size
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
                bucket[i][1] = value
                return
            }
        }

        bucket.push([key,value])

    }

    get(key){
        const index = this.hash(key)
        let bucket=this.table[index]
           // Check if bucket is undefined
    if (!bucket) {
        return undefined;
    }
        for( let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                return bucket[i][1]
            }
        }
        return undefined
    }

    isEmpty(){
        return this.table.length === 0
    }

    peek(){
        if(this.isEmpty()){
            return null
        }else{
            return this.table[0]
        }
    }

    remove(key){

        const index=this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            return
        }
        for(let i =0;i<bucket.length;i++){
           
            if(bucket[i][0]===key){
               return bucket.splice(i,1)
            }
        }
    }
    findDuplicates() {
        let duplicates = [];
        for (let i = 0; i < this.size; i++) {
            let bucket = this.table[i];
            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {
                    if (bucket[j][1] > 1) {
                        duplicates.push(bucket[j]);
                    }
                }
            }
        }
        return duplicates;
    }


    display(){

        for(let i=0;i<this.table.length;i++){
            let bucket=this.table[i]
            if(bucket && bucket.length>0){
                console.log(i,bucket);
            }
        }
    }
}

// const table=new HashMap(50)

// table.set("name","adith")
// table.display()
// table.set("hobby","yoyo")
// table.set("ohbby","vava")
// table.get("hobby")
// table.set("job","engineer")
// table.display()
// table.remove("job")
// table.display()


function characterFrequency(str){
    const table =new HashMap(50)
    for(let char of str){
        let currentCount = table.get(char)
        if(currentCount){
            table.set(char,currentCount+1)
        }else {
            table.set(char,1)
        }
    }
      // Find and display duplicates
      const duplicates = table.findDuplicates();
      if (duplicates.length > 0) {
          console.log("Duplicate characters with counts:");
          for (let [char, count] of duplicates) {
              console.log(`${char}: ${count}`);
          }
      } else {
          console.log("No duplicate characters found.");
      }

    table.display()
    table.peek()
}

let str = "hello world";
characterFrequency(str);