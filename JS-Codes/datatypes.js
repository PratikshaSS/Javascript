// Javascript has 8 Datatypes >> Primitive
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype >> Non-primitive
// 1. An Object
// 2. An Array
// 3. A Date


let state = '';  //Empty String

//string datatype
let city = 'Pune';  
console.log(city);

city = 'Mumbai';
console.log(city);
console.log(city);
console.log(city);

//number Datatype
var marks = 90;  
console.log('Marks ',marks);

var mobNo = 7456986423;
// var mobNo = "7456986423";  //String datatype
console.log('MobNo ',mobNo);

//boolean datatype 
var isFavFruit = false;   //true / false
console.log(isFavFruit);

//typeof() Operator >>  it will return / gives type of variable

console.log('Data type of isFavFruit variable is :',typeof(isFavFruit));

//Undefine Datatype
const match = undefined;
console.log(match);

let abc;
console.log(abc);
console.log(typeof(abc));

//Null Datatype
var myName = null;
console.log(myName);
console.log(typeof(myName));

//Bigint Datatype
let a = 9999999999999999;
console.log(a);

// let b = 5.3646666 >> 5.36

let c = "9999999999999999";
console.log(c);

let d = 9999999999999999n;
console.log(d);


//Non Primitive Datatypes 

//Array : Used to store multiple items of same datatype
let name = "Pooja live in Nashik, Mumbai is big city";
console.log(name); 

let cities = [];  //Empty Array
cities = ['Pune', 'Mumbai', 'Nashik', 'Satara', 'Kolhapur','Sangli'];
console.log(cities);

console.log(typeof(cities));  //data type of array is always object

console.log(cities[4]);  //kolhapur
console.log(cities[6]);  //undefined
console.log(cities.length);
console.log(cities[cities.length-1]);