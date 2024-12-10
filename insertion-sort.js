// function insertsionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numberToInsert=arr[i]
//         j=i-1
//         while(j<=0 && arr[j]>numberToInsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numberToInsert
//     }

// }

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numberToInsert=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>numberToInsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=numberToInsert
    }
}

const arr=[9,8,9,5,9,0,5,0,6,8]
insertionSort(arr)
console.log(arr);
