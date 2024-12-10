function palindrome(str) {
    str=str.toLowerCase()
  let mid = Math.floor(str.length / 2);
  console.log("mid:",mid);
  
  let i = 0;
  let j = str.length - 1;
//   let flag
var flag = 0;
  while (i < mid) {
    
    if (str[i] !== str[j]) {
     return false
    }
    i++
    j--
  }
  return true
}

let str="Malayalam"
// let str = "something";

console.log(palindrome(str));
