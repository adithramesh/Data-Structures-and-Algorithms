// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let midIndex=Math.floor(arr.length/2)
//     let leftArr=[];
//     let rightArr=[];

//         leftArr=arr.slice(0,midIndex)
//         rightArr=arr.slice(midIndex)


//     return merge(mergeSort(leftArr),mergeSort(rightArr))

// }


// function merge(leftArr,rightArr){
//     let temp=[]
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]>rightArr[0]){
//             temp.push(rightArr.shift())
//         }else{
//             temp.push(leftArr.shift())
//         }
//     }
//     return [...temp,...leftArr,...rightArr]
// }

function selectionSort(arr){
    let minIndex;
    let temp;
    for(let i=0;i<arr.length-1;i++){
        minIndex=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[minIndex]>arr[j]){
                minIndex=j
            }
        }
        temp=arr[minIndex]
        arr[minIndex]=arr[i]
        arr[i]=temp
    }
    return arr
}

let arr=[5,7,2,1,9]

console.log(selectionSort(arr));
