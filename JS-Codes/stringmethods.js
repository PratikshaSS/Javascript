// 1. length(property) : calculates length of string also calculate spaces
let text = "I live in Mumbai";
// let textLength = text.length;
// console.log("Length of String is :",textLength);
console.log("Length of String is :",text.length);


// 2. slice(method) : start index >> inclusive , end index >> exclusive
let slicedText = text.slice(2 , 6);
console.log(slicedText);            //exclusive >> excluded and inclusive >> included
console.log(text.slice(10 , 16));
console.log(text.slice(5));
console.log(text.slice(-13 , -5)); //start index >> exclusive , end index >> inclusive
console.log(text.slice(-13));


// 3. substring : start index (-ve) as 0 >> end is exclusive
console.log(text.substring(-5 , 10));

console.log(text.substr(2 , 6));    // start index , length >> both inclusive


// 4. replace(method) : replace 1st match
let str = "I live in Mumbai , I like Mumbai"
console.log(str.replace("Mumbai" , "pune"));    // replace 1st finder value
console.log(str.replace('Satara', 'Pune'));     // no change in op
console.log(str.replace("mumbai" , "pune"));    // no change >> case sensitive
console.log(str.replace(/mumbai/i , "pune"));   // regex (/mumbai/i)
console.log(str.replace(/mumbai/ig , "pune"));  // insensitive / globally replace

// replaceAll : replace all matches 
console.log(str.replaceAll("Mumbai" , "Nashik"));   // case sensitive
console.log(str.replaceAll(/mumbai/ig , "Nashik"));
console.log(str.replace("I live in Mumbai , I like Mumbai" , "Pratiksha"));


