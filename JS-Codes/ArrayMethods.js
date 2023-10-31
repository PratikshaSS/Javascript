// 1. length : operator >> Returns length of an array.
let city = ['Pune','Nashik','Mumbai','Jaipur',2000];
console.log('Length of an Array :',city.length);


// 2. toString() : Converts an array to string
console.log('Array to String :',city.toString());


// 3. pop() : pops out/delete/Removes last element(item) from array and returns that item.
let popedOutItem = city.pop();
console.log('Pop out element :',popedOutItem);
console.log('Original Array After pop :',city);


// 4. push() : To append / Adds an item at the end of an array and returns length of an original array
let pushElement = city.push(60000,'Poonam');
console.log('Pushed Items :',city);
console.log('Length of Array after push :',pushElement);


// 5. shift() : removes the first array element and shifts all other elements to lowerIndex
let color = ['red','blue','black','yellow'];
let shiftMethod = color.shift();
console.log('Shifted Item :',shiftMethod);
console.log('Array After shifting :',color);


//6. unshift() : adds item in the beginning and returns length of original length
let color1 = ['pink','red','blue','black','yellow'];
let unshiftedItem = color1.unshift('orange','white');
console.log('Length of Array after unshift :',unshiftedItem);
console.log('Original Array after unshift :',color1);


// 7. join() : joins new element after every element. We can use it like separator
let v = ['pink','red','blue','black','yellow'];
let v1 = v.join('*');
console.log('join Method :',v1);

let name = ['Poonam','Patil'];
let fname = name.join(' ');
console.log('Join :',fname);

let dob = ['04','05','2000'];
console.log(dob.join('-'));


// 8. concat() : merge / concat new array to existing array
cl2 = ['black','yellow'];
cl3 = [];
let cl4 = cl2.concat(cl3,v,'white');
console.log('concat method :',cl4);


// 9. delete : array elements can be deleted using delete operator
let fruits = ['Banana','Orange','Apple','Mango'];
delete fruits[1];
console.log('After Delete :',fruits);
console.log('Length after delete :',fruits.length); //length remains same after deleting an element.