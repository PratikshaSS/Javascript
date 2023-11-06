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
    //return [empData.empName , empData.city];
})
console.log(names);


// let nameObj = emp.map(({empName,city})=>({empName,city}));
// console.log(nameObj);

let nameObj = emp.map(({empName})=>({empName}));
console.log(nameObj);


// Objects are used for storing keyed collections
// Arrays are used for storing ordered collections


// search index of an element : 
const array = [10,20,30,20,40,20,50,88,20];
const searchElement = 20;
let foundIndex = [];

array.forEach((element,index) => {
    if(element === searchElement){
        foundIndex.push(index);
    }
});
console.log("indexes are :",foundIndex);    //[1,3,5,8]


// includes : gives true or false when element is present or not
const array1 = [10,20,50,30,40,50,60,70,80,50,90];
console.log('Includes :',array1.includes(50));  //true


// --- Remove Duplicate Items --- 

// 1. new Set() 
let char = ['a','b','a','d','f','b'];
let char2 = new Set(char);
console.log("Remove Duplicate Items using new Set :",char2);    // ['a','b','d','f']; 


// 2. filter : returns array
let data = char.filter((item,index) => {
    // if(char.indexOf(item) === index){
    //     return item;
    // }
    return char.indexOf(item) === index;
} )
console.log("Remove Duplicate Items using filter :",data);