// only works on sorted array

// function binarySearch(arr,t){
//     let leftIndex=0
//     let rightIndex=arr.length-1

//     while(leftIndex <= rightIndex){
//         let middleIndex=Math.floor((leftIndex+rightIndex)/2)
//         console.log("Middle Index:",middleIndex);
//         if(target===arr[middleIndex]){
//             return middleIndex
//         } if(target<arr[middleIndex]){
//             rightIndex=middleIndex-1
//         } else {
//             leftIndex=middleIndex+1
//         }
//     }
//     return -1
// }

// let arr=[1,2,3,4,5,6]
// let target=5

// console.log(binarySearch(arr,target));



let arr=[1,2,3,4,5,6]
let target=1

function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,leftindex,rightIndex){
    if(leftindex>rightIndex){
        return -1
    }

    let middleIndex=Math.floor((leftindex+rightIndex)/2)
    if(target===arr[middleIndex]){
        return middleIndex
    }else if(target<arr[middleIndex]){
        return search(arr,target,leftindex,middleIndex-1)
    }else{
        return search(arr,target,middleIndex+1,rightIndex)
    }
}


console.log(recursiveBinarySearch(arr,target));
