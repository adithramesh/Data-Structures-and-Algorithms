let arr = [1,2,3,4,5,6,7,8,9]
let t=6


function binarySearch(arr,t){

    let rightIndex=arr.length-1
    let leftIndex=0

    

    while(leftIndex<=rightIndex){
        let middleIndex=Math.floor((rightIndex+leftIndex)/2)
        if(t===arr[middleIndex]){
            return middleIndex
        }
        if(t>arr[middleIndex]){
            leftIndex=middleIndex+1
        }else{
            rightIndex=middleIndex-1
        }
    }

}

console.log(binarySearch(arr,t));


// let arr1 = [9,8,9,5,9,0,5,0,6,8]

// let arr2 = [2,5,3,6,9,7,5,2,56,5]


// function findCommon(arr1,arr2){
//     for(i=0;i<=arr1.length;i++){
//         for(j=0;j<arr2.length;j++){
//             if(arr1[i]===arr2[j]){
//                 return arr[i]
//             }
//         }
//     }
// }

// console.log(findCommon(arr1,arr2));
