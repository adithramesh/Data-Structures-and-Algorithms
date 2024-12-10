function quickSort(arr) {
  if(arr.length<2){
    return arr
  }  

  let left = [];
  let right = [];
  let pivot = arr[arr.length - 1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [9, 8, 9, 5, 9, 0, 5, 0, 6, 8];

console.log(quickSort(arr));
