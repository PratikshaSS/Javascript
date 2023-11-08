// spread Operator (...) : >>>>>
// The js spread operator(...) allows us to 
// quickly copy all or part of an existing array or 
// object into another array or object

// 1. Copy all array
let num = [40,50,60,40,8,70];
let num1 = [];
num.forEach(ele =>{
    num1.push(ele);
})
console.log("Using forEach :",num1);

let num2 = [...num];
console.log("Using spread Operator :",num2);


// 2. Copy part of an array
let [item1 , item2 , ...item3] = num;
console.log(item1);     //points to 1st item of an array
console.log(item2);     //points to 2nd item of an array
console.log(item3);     //points all remaining items of an array
