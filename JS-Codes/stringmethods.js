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


// 5. toUpperCase : convert all string to uppercase
console.log(str.toUpperCase());


// 6. toLowerString : convert all string to Lowercase
console.log(str.toLowerCase());


// 7. concat : concat strings 
let fName = 'Pratiksha';
let lName = 'Shinde';
// let fullName = fName + " " + lName;      //using concatnation operator
let no = 60600;
let fullName = fName.concat(' ' , no , ' ' , lName , ' ' , 4000)
console.log(fullName);

console.log('Upper Case :', str.toUpperCase() , 'Lower Case :', str.toLowerCase());


// 8. trim : removes white spaces from both sides of the string
let data = "        Pratiksha      ";
console.log(data.trim());
console.log(data.trimStart());
console.log(data.trimEnd());

var string = '   This     should    become   something        else    to . ';
stringData = string.trim().replace(/\s+/g, " ");    //+ indicates one or more spaces
console.log(stringData);


// 9. toString : converts any datatype to string
let num = 65656565;
let data1 = num.toString()
console.log(data1);


// 10. charAt : gives character of specific index
let text1 = "Hello World";
console.log(text1.charAt(0));
console.log(text1.charAt(13));  //returns empty value


// 11. split : splits out data and will return array
let date = "04-04-1992";
let newDate = date.split('-');        
console.log(newDate);
console.log(newDate[2]);


let num2 = "236728";
let m = parseInt(num2);
console.log(m);


let text4 = "fhc kjefgbsc w ydAJK JDSACBMX";
t4 = text4.split(' ');
console.log(t4);


// includes() : returns true if value is available in data else returns false
let add = "Banwadi Karad Pratiksha Satara";
console.log(add.includes('Pratiksha'));


// startswith() : emdsWith() : 
let statusCode = "100256";
console.log(statusCode.startsWith("100"));
console.log(statusCode.endsWith("256"));


// indexOf() : gives index of starting letter of word.
let text2 = "Hello to world, welcome to the to universe.";
console.log(text2.indexOf("welcome"));
console.log(text2.indexOf("the"));
console.log(text2.indexOf("Hello"));
console.log(text2.indexOf("to"));   //gives 1st match
console.log(text2.indexOf("toooooo"));  //gives -ve value (-1)
console.log(text2.lastIndexOf("to"));   //gives last match
console.log(text2.lastIndexOf("toooo"));  // -1


// search() : Search word is available in data or not.
let text3 = "Mr. Blue has a blue house";
console.log(text3.search("blue"));  //15
console.log(text3.search(/blue/i)); //4

// The search() cannot take a start position argument.
// The indexOf() method cannot search against a regular expression.

// The search() method returns the position of the first match.
// The match() method returns an array of matches.


let text5 = "The rain in SPAIN stays mainly in the plain";
console.log(text5.match("ain"));
console.log(text5.match(/ain/g));


