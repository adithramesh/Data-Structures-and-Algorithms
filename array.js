let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let combinedArray=array1.concat(array2,array3)


combinedArray.push(10)
combinedArray.pop()
combinedArray.unshift(0)
combinedArray.shift()
// console.log(combinedArray);

for(items of combinedArray){
    console.log(items);
}

let newArray=combinedArray.filter(a=>a%2==0)
console.log(newArray);