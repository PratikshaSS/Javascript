console.log();  //inbuilt funtion used to check values of variables etc.

let a = 10;
console.log(a);  //10

console.log('value :',a);   //value 10
console.log('value :'+a);  //value :10 >> removes space
//+ >> 1.concatnation operator 2. Arithmatic operator

let b = 20;
console.log('Addition :',a + b);  //30

let c = '30';
console.log(b + c);   //2030 >> concat

console.log(a + b + c);  //3030
console.log(c + b + a);  //302010
console.log(b + c + a);  //203010
console.log(b + a + c);  //3030
console.log(b + a + c + a + b);  //30301020