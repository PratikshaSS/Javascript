
// --- Remove Duplicate Items --- 

// 1. new Set() 
let char = ['a', 'b', 'a', 'd', 'f', 'b'];
let char2 = new Set(char);
console.log("Remove Duplicate Items using new Set :", char2);    // ['a','b','d','f']; 


// 2. filter : returns array
let data = char.filter((item, index) => {
    // if(char.indexOf(item) === index){
    //     return item;
    // }
    return char.indexOf(item) === index;
})
console.log("Remove Duplicate Items using filter :", data);


// 3. include()
let uniqueEle = [];
char.forEach((ele , i) => {
    if(!uniqueEle.includes(ele)){
        uniqueEle.push(ele);
    }
})
console.log("Remove Duplicate Items using includes :",uniqueEle);