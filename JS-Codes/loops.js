// for loop : avoid repetation of code 
// for in loop
// for of loop
// do while loop


//for loop : <keyword>for(initialization ; condition ; increment)

//console.log("1");
//console.log("2");
//console.log("3");
//console.log("4");
//console.log("5");
//console.log("6");
//console.log("7");
//console.log("8");
//console.log("9");
//console.log("10");


for(let a = 1 ; a <= 10 ; a++){
    console.log(a);
}


// for(;;){        //infinite loop
//     console.log('poonam');
// }


let student = {
    name: 'Pooja',
    age: 25,
    city: 'Pune'
}

//for in loop - it is used to iterate objects (ES1 version's feature)
for(let x in student){
    console.log(student[x]);     //[]property access symbol [x] 
}


 //for of  

 let color = ['red','orange','blue','purple','pink']; 
 for(let item of color){ 
    console.log(item); 
 } 
  

 //do while 

 let a=0; 
 do{ 
     console.log(a); 
     a++ 
 } 
 while(a<=5){ 
 //  console.log(a); 
 }