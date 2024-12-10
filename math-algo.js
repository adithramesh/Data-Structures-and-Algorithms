// Math Algorithm

// function fibonacci(n){
// const fib = [0,1]
// for(let i=2;i<n;i++){
//     fib[i]=fib[i-1] + fib[i-2]
// }
// return fib
// }

// console.log(fibonacci(0));
// console.log(fibonacci(3));
// console.log(fibonacci(7));   

// function factorial (n){
//     result =1;
//     for(i=2;i<=n;i++){
//         result = result*i;
//     }
//     return result
// }

// console.log(factorial(5));

// function isPrime(n){
//     if(n<2){
//         return false
//     }
//     let flag=0
//     for(i=2;i<n;i++){
//         if(n%i===0){
//            flag++
//         }
//     }
//     if(flag>0){
//         return false
//     }else{
//         return true
//     }
// }

// console.log(isPrime(6));
// console.log(isPrime(3));
// console.log(isPrime(2));
// console.log(isPrime(0));
// console.log(isPrime(-1));
// console.log(isPrime(1));

// function recursiveFibonacci(n){
//     if (n<2){
//         return n
//     }
//     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }

// console.log(recursiveFibonacci(6));


function recursiveFactorial(n){
if(n===0){
    return 1
}
return n*recursiveFactorial(n-1)
}

console.log(recursiveFactorial(5));


