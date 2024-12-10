function selectionSort(arr){
let min;
for(let i=0;i<arr.length;i++){
    min=i
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j
        }
    }
 
   
        temp=arr[min]
        arr[min]=arr[i]
        arr[i]=temp
  

}
return arr
}

let arr=[5, 2, 9, 1, 5, 6]

console.log(selectionSort(arr));