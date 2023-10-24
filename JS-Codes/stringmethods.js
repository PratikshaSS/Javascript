// 1. length(property) : calculates length of string also calculate spaces
let text = "I live in Mumbai";
// let textLength = text.length;
// console.log("Length of String is :",textLength);
console.log("Length of String is :",text.length);


// 2. slice : start index >> inclusive , end index >> exclusive
let slicedText = text.slice(2 , 6);
console.log(slicedText);            //exclusive >> excluded and inclusive >> included
console.log(text.slice(10 , 16));
console.log(text.slice(5));
console.log(text.slice(-13 , -5)); //start index >> exclusive , end index >> inclusive
console.log(text.slice(-13));


// 3. substr : start index (-ve) as 0 >> end is exclusive
console.log(text.substring(-5 , 10));

console.log(text.substr(2 , 6));    // start index , length >> both inclusive



