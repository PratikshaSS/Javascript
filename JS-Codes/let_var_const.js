// let/var/const (variable name) =value 

//var is a default

// scope level diff:
// let & const : block level scope 
// var : function level scope
 
var z = 90;   //global variable
function test(){
    let a = 10;
     if(a < 20){
       let b = 30;  
       var c = 60;
       const d = 70;
       console.log(b);
     }
     console.log(c);
     // console.log(d);     //false
     // console.log(b);     //false
     console.log(z);      //90
 }
 console.log(z);     //90
 console.log(test());
 
 // Redeclaration is not possible with let,const keyword
//  const city1 = 'pune';
//  const city1 = "mumbai";

//  let city2 = 'pune';
//  let city2 = "mumbai";
 
// Redeclaration is posible with var keyword
 var city = 'pune';
 var city = "mumbai";
 
 // reassigning value to the variable is possible with let , var keyword 
 let marks = 50;
 marks = 60;

 var a = 40;
 a = 60;
 
 // reassigning value to the variable is not possible with const keyword
//  const s = 60;
//  s = 77;
 

 // hoisting : first define value to the variable then declare it
 
 // hoisting is possible using var keyword
 // not possible with const , let keyword
 
 p = 50;
 var p;

//  e = 30;
//  let e;
 

 //defining value at a time of declaration is must with const keyword
 let f;
 f = 40;
 
 var r ;
 r = 67;
 
//  const y ;
//  y = 90;
 
 const y = 90;
 

 //function : parameterised, parameterless
 //use is to implement logic

 function multiplication(){   //parameterless
  //code block
  console.log("Parameterless Function");
  let a = 20;
  let b = 30;
  res = a * b;
  console.log("Multiplication is :",res);
 }

 //argument/parameter
 function division(a,b){  //parameterised
  //code block
  console.log("Parameterised Function");
  res = a / b;
  console.log("Division is :",res);

 }