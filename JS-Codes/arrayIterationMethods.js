// 1. forEach() : Array Iteration Method
const numbers = [45, 4, 9, 16, 25, 67, 88]; //9

// using simple for loop
let num = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] != 9) {
        num.push(numbers[i])
    }
}
console.log("Using for loop :", num);

// using forEach : 
// break and continue keywords we cannot applied with forEach.
let num2 = [];
numbers.forEach(item => {
    if (item != 9) {
        num2.push(item)
    }
})
console.log("Using forEach :", num2);


// break : breaks out looping
num = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 16) {
        break;
    }
    num.push(numbers[i]);
}
console.log("Break :", num);   // [45, 4, 9]



// for(let i = 1 ; i <= 50 ; i++){
//     if(i >=31 && i <= 40){
//         console.log(i);
//     }
// }


// const item = [1,2,3,4,5,6,7,8,9,10];
// item.forEach(ele =>{
//     if(ele >= 3 && ele <= 9){
//         document.write(ele,'<br>');
//     }
// })


// continue : 
num = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 16) {
        continue;
    }
    num.push(numbers[i]);
}
console.log("Continue :", num);



// find() : returns the 1st match that passes test condition.
const item1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const item = [1,2,3,4,5,6,7,12,9,10]; //12
// const item = [1,2,3,4,5,6,7,4,9,10];  //9
let no = item1.find(item => {
    return item > 7;
})
console.log("find method :", no);    //8


// indexOf() : case sensitive >> wil return -1 if match not found 
const fruits = ['Apple', 'Orange', 'Apple', 'Mango', 'Orange'];
console.log("indexOf Method :", fruits.indexOf("Orange"));  //gives 1st match
console.log("indexOf Method :", fruits.indexOf("orange"));


// lastIndexOf() : case sensitive >> wil return -1 if match not found 
console.log("Last indexOf :", fruits.lastIndexOf("Orange")); //gives last match


// map() : returns new array of filtering data
emp = [
    {
        empName: "Pooja", city: "Pune"
    },

    {
        empName: "Pravin", city: "satara"
    },

    {
        empName: "Sagar", city: "Nashik"
    }
]
let names = emp.map(empData => {
    return empData.empName;
})

console.log(names);
