// 1. toString() : Converts number to String. 
    // Returns number as a string
let no = 787787;
let no1 = no.toString();
console.log("Number to String :",no1);


// 2. toExponential() : Returns a number written in exponential notation
let num = 9.656;
console.log("toExponential :",num.toExponential());
console.log("toExponential :",num.toExponential(2));
console.log("toExponential :",num.toExponential(4));
console.log("toExponential :",num.toExponential(6));


// 3. toFixed() : Returns a number written with a number of decimals
    // to fix the number 
let weight = 4.567496;
console.log("toFixed :",weight.toFixed(0));
console.log("toFixed :",weight.toFixed(2));
console.log("toFixed :",weight.toFixed(4));
console.log("toFixed :",weight.toFixed(6));


// 4. toPrecision() : Returns a number written with a specified length
let x = 9.656
console.log("toPrecision :",x.toPrecision(2));
console.log("toPrecision :",x.toPrecision(4));
console.log("toPrecision :",x.toPrecision(6));


// 5. valueOf() : Returns a number as a number
let r = 5656;
console.log("ValueOf :",r.valueOf());