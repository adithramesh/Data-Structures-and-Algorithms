function linearSearch(t,arr){
    for(i=0;i<arr.length;i++){
        if(t===arr[i]){
            return i
        }
    }
    return -1
}

let n=4
let array=[1,2,3,4,5]
console.log(linearSearch(n,array));
