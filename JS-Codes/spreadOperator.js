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


// Concatnation of an array
let color1 = ['red','orange'];
let color2 = ['violet','black'];
let color = [...color1 , ...color2];
console.log("Concatnation of two arrays :",color);


// 3. copy objects
let emp = {
    name : 'Sushant',
    age : '25',
    city : 'Pune'
};

let emp3 = {...emp};
console.log("Copy objects :",emp3);

// concatnation of objects : cant use spread operator for obj
let emp1 = {
    name : 'Sumit',
    age : '25',
    city : 'Pune',
    mob : 3243567
};
let emp2 = {
    name : 'Rajesh',
    age : '25',
    city : 'Pune',
    sal : 30000
};
let emp4 = {...emp1 , ...emp2}; //use spread operator if keys are diff in both objects
console.log(emp4);

// const mergeObj = Object.assign({}, target, ...source);
const mergeObj = Object.assign({},emp1, emp2);
console.log(mergeObj);