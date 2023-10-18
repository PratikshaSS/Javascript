// = >> Assignment Operator >> To assign value to the variable
// == >> Equality Operator >> To compare values of Two variables. does not compare datatype
// === >> Strict Equality Operator >> Strictly check value as well as datatype

let a = 40;     //Assignment Operator
let b = "40"
let s = 30;
console.log(a == b);    //true
console.log(a === b);   //false
console.log(b == s);    //false
console.log(b === s);   //false


// ! not operator ; !true >> false ; !false >> true
let c = 20;
let d = 30;
console.log(c != d);    //true
console.log(c == d);    //false

let isFav = true;
console.log(!isFav);    //false


// Greater then and Smaller than  >> check only values not datatypes
let e = 40;
let f = 50;

console.log(e > f); //false
console.log(e < f); //true

console.log(e <= f);    //true  >> less than equal to operator