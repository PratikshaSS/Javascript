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


// Greater then and Less than >> check only values not datatypes
let e = 40;
let f = 50;

console.log(e > f); //false
console.log(e < f); //true

console.log(e <= f);    //true  >> less than equal to operator
console.log(e >= f);    //false


// (Logical AND) && AND : T && T --> T, else false >> Returns true only if both conditions are true 

console.log(e < f && f > e);   //true  >> T && T
console.log(e < f && f < e);    //false  >> T && F  >> F && T
console.log(e > f && f < e);    //false  >> F && F


// (Logical OR) || OR : F || F --> F, else true >> Returns false only when both conditions are false

console.log(e < f || f == e);   //true >> T || F  >> F || T
console.log(e < f || f > e);    //true >> T || T
console.log(e > f || f < e);    //false >> F || F

console.log(e < f || f == e && a != b); //true >> T || F >>T && T >>> True

console.log(a != b);    //true >> value and datatype checked











