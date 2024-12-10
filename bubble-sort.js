function bubbleSort(arr){
    let swapped;
    do{
        swapped=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i+1]
                arr[i+1]=arr[i]
                arr[i]=temp
                swapped=true
            }
        }
        
    }while(swapped)
        return arr
}

let arr=[5, 2, 9, 1, 5, 6]

console.log(bubbleSort(arr));
