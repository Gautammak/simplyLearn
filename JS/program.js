// var number = 83;
// var isPrime = true;

// if(number === 1){
//     document.write("1 is not prime or composite")
// }

// else if(number > 1){
//     for(var i =2;i<number/2;i++){
//         if(number%i==0){
//             isPrime=false;
//             break;
//         }
//     }

//     if(isPrime==true){
//         document.write(number + "\n is prime")
//     }
//     else{
//         document.write(number + "\n is not prime number")
//     }
// }

// else{
//     document.write("not prime")
// }



//prime number
 

// function isPrime(number) {
//   // Handle special cases for numbers less than 2
//   if (number <= 1) {
//     return false;
//   }
//   // Check for divisibility from 2 to the square root of the number
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false; // It's divisible by another number, so it's not prime
//     }
//   }
//   return true; // It's not divisible by any number other than 1 and itself, so it's prime
// }

// //Example :
// const num = 9;
// if (isPrime(num)) {
//   console.log(`${num} is a prime number.`);
// } else {
//   console.log(`${num} is not a prime number.`);
// }


//armstrong program

// let n = prompt('enter number');
// let sum = 0;
// let num = n;

// while(num>0){
//     r=num%10
//     sum+=r*r*r;
//     num=parseInt(num/10);
// }
// console.log(n,sum);
// if(n==sum){
//     console.log("number is armstrong");
// }else{
//     console.log("not armstrong");
// }


//factorial number

// var num = 5
// var fact = 1;
// for(var i = num;i>=1;i--){
//     fact = fact*i;
// }
// document.write(fact);