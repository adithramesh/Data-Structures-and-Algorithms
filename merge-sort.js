function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
   
        let mid = Math.floor(arr.length/2)
        let leftArr = arr.slice(0,mid)
        let rightArr = arr.slice(mid)
        return merge(mergeSort(leftArr),mergeSort(rightArr))
    
}

function merge(leftArr,rightArr){
    let temp = []
    while(leftArr.length && rightArr.length){
        console.log("left:",leftArr);
        console.log("right:",rightArr);
        
        
        if(leftArr[0]>=rightArr[0]){
            temp.push(rightArr.shift())
        }else{
            temp.push(leftArr.shift())
        }
    }
    return [temp,rightArr,leftArr]
    
}

const arr = [6,20,-2,8,25]

console.log(mergeSort(arr));
