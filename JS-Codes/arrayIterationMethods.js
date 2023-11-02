// 1. forEach() : Array Iteration Method
const numbers = [45, 4, 9, 16, 25, 67, 88]; //9

// using simple for loop
let num = [];
for(let i = 0 ; i < numbers.length ; i++){
    if(numbers[i] != 9){
        num.push(numbers[i])
    }
}
console.log("Using for loop :",num);   

// using forEach : 
    // break and continue keywords we cannot applied with forEach.
let num2 = [];
numbers.forEach(item => {
    if(item != 9){
        num2.push(item)
    }
})
console.log("Using forEach :",num2);


// break : breaks out looping
num = [];
for(let i = 0 ; i < numbers.length ; i++){
    if(numbers[i] == 16){
        break;      // breaks out looping
    }
    num.push(numbers[i]);
}
console.log(num);   // [45, 4, 9]