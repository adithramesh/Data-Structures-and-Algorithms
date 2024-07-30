// Sorting

// let a =[-2,99,10,4,11]
// function bubbleSort(arr){
   
//     do{
//         var swapped = false
//         for(i=0;i<arr.length;i++){
           
//             if(arr[i]>arr[i+1]){
//                let temp=arr[i];
//                 arr[i]=arr[i+1];
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while (swapped)

// return arr

// }

// console.log(bubbleSort(a));


// insertion sort

// function insertionSort(){
//     for(i=1;i<arr.length;i++){
//         let numberToInsert=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>numberToInsert){
//             arr[j+1]=arr[j]
//             j = j-1
//         }
//         arr[j+1] =  numberToInsert
//         console.log("inside:",arr);
//     }
//   return arr
// }


function insertionSort(arr){
    for(i=1;i<arr.length;i++){
        let  numberToInsert=arr[i];
        j=i-1;
        while(j>=0 && arr[j]>numberToInsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=numberToInsert;
    }
    return arr
}

const arr=[-6,20,8,-2,4]
console.log(insertionSort(arr));
