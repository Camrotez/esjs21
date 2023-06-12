let num1 = 10;
let num2 = 20;
let [a,b] =[num1, num2];
// console.log('Before swap: ', num1, num2); // Before swap: 10 20
console.log([a,b]);

// Variable swapping
let temp = num2;
num2 = num1;
num1 = temp;
let [c,d] = [num1,num2];

// console.log('After swap: ', num1, num2); // After swap: 20 10
console.log([c,d]);