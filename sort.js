// Sorting

// Bubble Sort
// Big O = O(n^2)
// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(i=0;i<arr.length-1;i++){
//             if(arr[i]<arr[i+1]){
//                 temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
//         return arr
// }

// Insertion Sort
// Big O = O(n^2)
// function insertionSort(arr){
//       for(let i=1;i<arr.length;i++){
//         let numberToInsert=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>numberToInsert){
            
//                 arr[j+1]=arr[j]
//                 j--
         
//         }
//         arr[j+1]=numberToInsert
//     }
//       return arr

// }


// Quick Sort

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }

//     let pivot=arr[arr.length-1]
//     let leftArr=[]
//     let rightArr=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }


// Merge Sort
// Big O = O(nlogn)
// function mergeSort(arr){

//     if(arr.length<2){
//         return arr
//     }
//     let midIndex=Math.floor(arr.length/2)
//     let leftArr=arr.slice(0,midIndex)
//     let rightArr=arr.slice(midIndex)

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
    let min
    let temp
    for(let i=0;i<arr.length-1;i++){
        min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                min=j
            }
        }

        temp=arr[min]
        arr[min]=arr[i]
        arr[i]=temp

    }
    return arr
}

const arr=[5,2,1,9,7]
console.log(selectionSort(arr));
